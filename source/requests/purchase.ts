/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Credits purchasing request.
 */
@RestDB.Schema.Entity('credits/{id}/purchase')
@Class.Describe()
export class Purchase extends Class.Null {
  /**
   * Card Id.
   */
  @RestDB.Schema.Id()
  @Class.Public()
  public cardId?: string;
}
