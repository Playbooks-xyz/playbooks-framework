import { compilerOptions } from './tsconfig.json';
import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/',
	}),
};

export default jestConfig;
