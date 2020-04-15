/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Types from '../types';

/**
 * Credits recurrence, entity class.
 */
@RestDB.Schema.Entity('credits/recurrence')
@Class.Describe()
export class Recurrence extends Class.Null {
  /**
   * Recurrence type.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Recurrence))
  @Class.Public()
  public type!: Types.Recurrence;

  /**
   * Recurrence price.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public price!: number;

  /**
   * Recurrence base price.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public base!: number;
}
