/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Internals from './internals';
import * as Types from './types';
/**
 * Credits entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Credit Id.
     */
    id: string;
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Credit provider.
     */
    provider: Types.Provider;
    /**
     * Credit title.
     */
    title: string;
    /**
     * Credit description.
     */
    description: string;
    /**
     * Credit quantity.
     */
    quantity: number;
    /**
     * Credit recurrence list.
     */
    recurrenceList: Internals.Recurrence[];
    /**
     * Get the recurrence entity that corresponds to the specified recurrence type.
     * @param type Recurrence type.
     * @returns Returns the recurrence entity.
     * @throws Throws an error when the recurrence entity isn't found.
     */
    getRecurrenceByType(type: string): Internals.Recurrence;
}
