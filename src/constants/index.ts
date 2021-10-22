import { SetMetadata } from '@nestjs/common';
import { join } from 'path';

const rootPath = join(__dirname, '..', '..');

export { rootPath };

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
