import { DataReader } from '../models/data-reader.interface';
import path from 'path';
import fs from 'fs';

export class TxtFileReader implements DataReader {

    data: string[][] = [];

    constructor(private _fileName: string) { }

    read(): void {

        if (path.extname(this._fileName) !== '.txt')

            throw new Error(`${this._fileName} is not of TXT Format`);

        this.data = fs.readFileSync(this._fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row: string): string[] => row.split('\t'))
            .filter(String);
    }

    get fileName(): string {
        return this._fileName;
    }

}
