// Copyright 2020-2021 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ApiService } from './api.service';
import { IndexerManager } from './indexer.manager';
import { StoreService } from './store.service';

@Module({
  imports: [DbModule.forFeature(['Subquery'])],
  providers: [IndexerManager, StoreService, ApiService],
  exports: [],
})
export class IndexerModule {}
