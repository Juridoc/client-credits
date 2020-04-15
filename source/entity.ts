/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Internals from './internals';
import * as Types from './types';

/**
 * Credits entity class.
 */
@RestDB.Schema.Entity('credits')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Credit Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Credit provider.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Enumeration(Object.values(Types.Provider))
  @Class.Public()
  public provider!: Types.Provider;

  /**
   * Credit title.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public title!: string;

  /**
   * Credit description.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public description!: string;

  /**
   * Credit quantity.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Number()
  @Class.Public()
  public quantity!: number;

  /**
   * Credit recurrence list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Recurrence)
  @Class.Public()
  public recurrenceList!: Internals.Recurrence[];

  /**
   * Get the recurrence entity that corresponds to the specified recurrence type.
   * @param type Recurrence type.
   * @returns Returns the recurrence entity.
   * @throws Throws an error when the recurrence entity isn't found.
   */
  @Class.Public()
  public getRecurrenceByType(type: string): Internals.Recurrence {
    const entity = this.recurrenceList.find((recurrence) => recurrence.type === type);
    if (entity === void 0) {
      throw new TypeError(`Recurrence entity '${type}' doesn't found.`);
    }
    return entity;
  }
}
