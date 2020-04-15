/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Credits recurrence, entity class.
 */
export declare class Recurrence extends Class.Null {
    /**
     * Recurrence type.
     */
    type: Types.Recurrence;
    /**
     * Recurrence price.
     */
    price: number;
    /**
     * Recurrence base price.
     */
    base: number;
}
