/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { resolve } from 'path';

// Path to the typegen binary.
export const TYPEGEN_BIN = resolve(__dirname, '..', 'bin', 'typegen');

// Top-level directories within user packages.
export const SOURCE_DIR = 'src';
export const BUILD_DIR = 'build';
export const DEPS_DIR = 'deps';
export const WORKFLOWS_DIR = 'workflows';
