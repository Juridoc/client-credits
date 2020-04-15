/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';
import * as Core from '@juridoc/client-core';
import * as Requests from './requests';
import { Entity } from './entity';
/**
 * Credits mapper class.
 */
export declare class Mapper extends Class.Null {
    /**
     * Client instance.
     */
    private client;
    /**
     * Mapper instance.
     */
    private mapper;
    /**
     * Get the error entity from the last operation.
     */
    get error(): Core.Entities.Error | undefined;
    /**
     * Purchase the entity that corresponds to the specified Id based on the given purchasing request.
     * @param id Credits entity Id.
     * @param request Credits purchasing request.
     * @returns Returns a promise to get true when the purchasing was completed.
     * @throws Throws an error when the purchase wasn't created.
     */
    purchase(id: string, request: Requests.Purchase): Promise<boolean>;
    /**
     * Load the credit that corresponds to the specified credit Id.
     * @param id Credit Id.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the credit entity.
     * @throws Throws an error when the credit wasn't found.
     */
    load(id: string, fields?: string[]): Promise<Entity>;
    /**
     * List all credits that corresponds to the specified filter.
     * @param query Query filter.
     * @param fields Fields to be selected.
     * @returns Returns a promise to get the credit list or undefined when an error occurs.
     */
    list(query: RestDB.Query, fields?: string[]): Promise<Entity[] | undefined>;
    /**
     * Count all credits that corresponds to the specified filter.
     * @param query Query filter.
     * @returns Returns a promise to get the number of credits or undefined when an error occurs.
     */
    count(query: RestDB.Query): Promise<number | undefined>;
}
