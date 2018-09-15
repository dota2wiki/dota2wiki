// tslint:disable:no-reserved-keywords no-any

import * as fs from 'fs';
import * as icu from 'detect-character-encoding';
import * as vdf from '@node-steam/vdf';
import chalk from 'chalk';

type TypeOfResult =
  | 'string'
  | 'number'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function';

/**
 * Load a vdf file async.
 * @param path the path to the vdf file.
 */
export async function load(path: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    fs.readFile(path, (readError, buffer) => {
      if (readError) {
        reject(readError);
      }

      let content: string;
      let data: any;

      try {
        const encoding: string = icu(buffer).encoding;
        content = buffer.toString(encoding === 'ISO-8859-1' ? 'utf-8' : encoding);
        data = vdf.parse(content);
      } catch (error) {
        reject(error);
      }

      resolve(data);
    });
  });
}

/**
 * Save a object as a typescript module.
 * @param path the path to the ts file
 * @param data the object
 */
export async function save(path: string, data: any): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(
      path,
      `// tslint:disable\nexport default ${JSON.stringify(data, undefined, '  ')}`,
      error => {
        if (error) {
          return reject(error);
        }

        resolve(data);
      },
    );
  });
}

export function toBoolean(value: any): boolean {
  if (typeof value === 'string') {
    const rawValue: string = value.trim();
    if (rawValue === '0') {
      return false;
    }
    if (rawValue === '1') {
      return true;
    }
  }

  return !!value;
}

export function toString(value: any): string {
  if (typeof value === 'string') {
    return value;
  }

  if (value === undefined) {
    return 'undefined';
  }
  if (value === null) {
    return 'null';
  }

  return value.toString();
}

export function toNumber(value: string): number {
  if (value === undefined || value === null) {
    return 0;
  }

  if (typeof value === 'number') {
    return value;
  }

  const result: number = Number(value);
  if (isNaN(result)) {
    throw new Error(`'${value}' cannot be converted to number.`);
  }

  return result;
}

export function toStringArray(value: any): string[] {
  if (value === undefined || value === null) {
    return [];
  }
  switch (typeof value) {
    case 'string':
      return (value as string)
        .replace(/\[|\]/, '')
        .split(/\,|\;/)
        .map(item => item.trim())
        .filter(item => item !== '');
    case 'number':
      return [(value as number).toString()];

    default:
  }
  throw new Error(`‘’${value} cannot be converted to string array.`);
}

export function toNumberArray(value: any): number[] {
  if (value === undefined || value === null) {
    return [];
  }
  switch (typeof value) {
    case 'string':
      return (value as string)
        .replace(/\[|\]/, '')
        .split(/\,|\;|\ /)
        .map(item => item.trim())
        .filter(item => item !== '')
        .map(item => Number(item));
    case 'number':
      return [value];

    default:
  }
  throw new Error(`'${value}' cannot be converted to number array.`);
}

export function toColorText(value: any): string {
  if (typeof value === 'string') {
    const textList: number[] = value.split(' ').map(s => parseInt(s, 10));

    return textList.length === 3 || (textList.length === 4 && textList[3] === 255)
      ? `#${textList
          .slice(0, 3)
          .map(n => n.toString(16).padStart(2, '0'))
          .join('')}`
      : `rgba(${textList.join(',')})`;
  }
  throw new Error(`'${value}' cannot be converted to color.`);
}

export function splitToEnumText(text: string): string[] {
  return text
    .split('|')
    .map(item => item.trim())
    .filter(item => item !== '');
}

/**
 * Walk all enum item names in data.
 */
export class EnumSpider {
  public readonly fields: ReadonlyArray<string>;
  public readonly map: Record<string, Set<string>> = {};
  public readonly flags: Record<string, boolean> = {};

  constructor(...fields: string[]) {
    this.fields = fields;
    fields.forEach(f => {
      this.map[f] = new Set();
      this.flags[f] = false;
    });
  }

  public walk(object: any): void {
    (Array.isArray(object) ? object : [object]).forEach(obj =>
      this.fields.forEach(f => {
        if (obj[f]) {
          if ((obj[f] as string).includes('|')) {
            this.flags[f] = true;
          }
          splitToEnumText(obj[f]).forEach(item => this.map[f].add(item));
        }
      }),
    );
  }

  public print(): void {
    console.info('======== Enums ========');
    Object.entries(this.map).forEach(([f, s]) => {
      console.info(
        chalk.cyanBright(f),
        [...s].length,
        chalk.redBright(this.flags[f] ? 'flag' : ''),
      );
      s.forEach(item => console.info(`  ${chalk.cyan(item)},`));
    });
    console.info('========  End  ========');
  }
}

export interface TypeMap {
  boolean: boolean;
  string: string;
  number: number;
  ['string[]']: string[];
  ['number[]']: number[];
  color: string;
}

export type SchemaItem =
  | {
      type: keyof TypeMap | 'enum';
      field: string;
      enumMap?: any;
    }
  | [keyof TypeMap | 'enum', string]
  | [keyof TypeMap | 'enum', string, any];

export type Schema<T extends { [key: string]: any }> = {
  [key in keyof T]: 'skip' | keyof TypeMap | SchemaItem | (() => T[key])
};

/**
 * Valve data extracting helper.
 */
export class ValveData {
  public readonly data: any;

  constructor(object: any) {
    this.data = object;
  }

  public has(field: string): boolean {
    return !(this.data[field] === undefined || this.data[field] === null);
  }

  public mapGet<T extends { [key: string]: any }>(schema: Schema<T>): T {
    const result: T = {} as any;
    this.mapInject<T>(result, schema);

    return result;
  }

  public mapInject<T extends { [key: string]: any }>(target: T, schema: Schema<T>): this {
    Object.entries(schema).forEach(([key, schemaItem]) => {
      if (schemaItem === undefined) {
        throw new Error(
          'Schema item can not be undefined, if need to get value for a optional property, use "skip" to instead.',
        );
      }
      if (schemaItem === 'skip') {
        return;
      }
      if (typeof schemaItem === 'function') {
        return (target[key] = schemaItem());
      }
      const [type, field, enumMap] =
        typeof schemaItem === 'string'
          ? [schemaItem, key, undefined]
          : Array.isArray(schemaItem)
            ? (schemaItem as [keyof TypeMap | 'enum', string, any])
            : [schemaItem.type, schemaItem.field, schemaItem.enumMap];
      if (type === 'enum') {
        if (enumMap) {
          target[key] = this.getEnum(field, enumMap);
        } else {
          throw new Error(`Missing enumMap for enum type injecting, field: '${field}'`);
        }
      } else {
        target[key] = this.get(type, field);
      }
    });

    return this;
  }

  public get<T extends keyof TypeMap>(type: T, field: string): TypeMap[T] {
    switch (type) {
      case 'boolean':
        return toBoolean(this.data[field]);
      case 'string':
        return toString(this.data[field]);
      case 'number':
        return toNumber(this.data[field]);
      case 'string[]':
        return toStringArray(this.data[field]);
      case 'number[]':
        return toNumberArray(this.data[field]);
      case 'color':
        return toColorText(this.data[field]);

      default:
    }
    throw new Error(`Invalid type name ${type}`);
  }

  public getEnum<E extends number = number>(field: string, map: any): E {
    // tslint:disable-next-line:typedef
    const reject = () =>
      new Error(`data['${field}']='${this.data[field]}' cannot be converted to enum.`);
    if (this.data[field] === undefined || this.data[field] === null) {
      return 0 as E;
    }
    if (typeof this.data[field] === 'string') {
      const inter: E[] = splitToEnumText(this.data[field]).map(item => map[item]);
      if (inter.length === 0) {
        throw reject();
      }

      const types: TypeOfResult[] = inter.map(item => typeof item);
      if (types.includes('undefined')) {
        throw reject();
      }
      if (types.includes('string')) {
        throw new Error(
          `data['${field}']='${this.data[field]}' cannot be converted to flag enum.`,
        );
      }

      if (inter.length === 1) {
        return inter[0];
      }

      // tslint:disable-next-line:no-bitwise
      return (inter as number[]).reduce((pre, cur) => pre | cur) as E;
    }

    throw reject();
  }
}
