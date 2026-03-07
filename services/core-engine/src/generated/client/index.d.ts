
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Merchant
 * 
 */
export type Merchant = $Result.DefaultSelection<Prisma.$MerchantPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model Webhook
 * 
 */
export type Webhook = $Result.DefaultSelection<Prisma.$WebhookPayload>
/**
 * Model ApiLog
 * 
 */
export type ApiLog = $Result.DefaultSelection<Prisma.$ApiLogPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model LedgerEntries
 * 
 */
export type LedgerEntries = $Result.DefaultSelection<Prisma.$LedgerEntriesPayload>
/**
 * Model WebhookDelivery
 * 
 */
export type WebhookDelivery = $Result.DefaultSelection<Prisma.$WebhookDeliveryPayload>
/**
 * Model IdempotencyKey
 * 
 */
export type IdempotencyKey = $Result.DefaultSelection<Prisma.$IdempotencyKeyPayload>
/**
 * Model Refund
 * 
 */
export type Refund = $Result.DefaultSelection<Prisma.$RefundPayload>
/**
 * Model Chargeback
 * 
 */
export type Chargeback = $Result.DefaultSelection<Prisma.$ChargebackPayload>
/**
 * Model PaymentStateTransition
 * 
 */
export type PaymentStateTransition = $Result.DefaultSelection<Prisma.$PaymentStateTransitionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MerchantStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  INACTIVE: 'INACTIVE'
};

export type MerchantStatus = (typeof MerchantStatus)[keyof typeof MerchantStatus]


export const OrderStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  CREATED: 'CREATED',
  AUTHORIZED: 'AUTHORIZED',
  CAPTURED: 'CAPTURED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  REVERSED: 'REVERSED',
  CHARGEBACK: 'CHARGEBACK'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const LedgerType: {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT'
};

export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType]


export const ReferenceType: {
  ORDER: 'ORDER',
  PAYMENT: 'PAYMENT',
  REFUND: 'REFUND',
  TRANSFER: 'TRANSFER',
  WITHDRAWAL: 'WITHDRAWAL',
  CHARGEBACK: 'CHARGEBACK'
};

export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType]

}

export type MerchantStatus = $Enums.MerchantStatus

export const MerchantStatus: typeof $Enums.MerchantStatus

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type LedgerType = $Enums.LedgerType

export const LedgerType: typeof $Enums.LedgerType

export type ReferenceType = $Enums.ReferenceType

export const ReferenceType: typeof $Enums.ReferenceType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Merchants
 * const merchants = await prisma.merchant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Merchants
   * const merchants = await prisma.merchant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.merchant`: Exposes CRUD operations for the **Merchant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Merchants
    * const merchants = await prisma.merchant.findMany()
    * ```
    */
  get merchant(): Prisma.MerchantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhook`: Exposes CRUD operations for the **Webhook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webhooks
    * const webhooks = await prisma.webhook.findMany()
    * ```
    */
  get webhook(): Prisma.WebhookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.apiLog`: Exposes CRUD operations for the **ApiLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiLogs
    * const apiLogs = await prisma.apiLog.findMany()
    * ```
    */
  get apiLog(): Prisma.ApiLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledgerEntries`: Exposes CRUD operations for the **LedgerEntries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerEntries
    * const ledgerEntries = await prisma.ledgerEntries.findMany()
    * ```
    */
  get ledgerEntries(): Prisma.LedgerEntriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookDelivery`: Exposes CRUD operations for the **WebhookDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookDeliveries
    * const webhookDeliveries = await prisma.webhookDelivery.findMany()
    * ```
    */
  get webhookDelivery(): Prisma.WebhookDeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.idempotencyKey`: Exposes CRUD operations for the **IdempotencyKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdempotencyKeys
    * const idempotencyKeys = await prisma.idempotencyKey.findMany()
    * ```
    */
  get idempotencyKey(): Prisma.IdempotencyKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refund`: Exposes CRUD operations for the **Refund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refunds
    * const refunds = await prisma.refund.findMany()
    * ```
    */
  get refund(): Prisma.RefundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chargeback`: Exposes CRUD operations for the **Chargeback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chargebacks
    * const chargebacks = await prisma.chargeback.findMany()
    * ```
    */
  get chargeback(): Prisma.ChargebackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentStateTransition`: Exposes CRUD operations for the **PaymentStateTransition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentStateTransitions
    * const paymentStateTransitions = await prisma.paymentStateTransition.findMany()
    * ```
    */
  get paymentStateTransition(): Prisma.PaymentStateTransitionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Merchant: 'Merchant',
    ApiKey: 'ApiKey',
    Webhook: 'Webhook',
    ApiLog: 'ApiLog',
    User: 'User',
    Card: 'Card',
    Order: 'Order',
    Payment: 'Payment',
    LedgerEntries: 'LedgerEntries',
    WebhookDelivery: 'WebhookDelivery',
    IdempotencyKey: 'IdempotencyKey',
    Refund: 'Refund',
    Chargeback: 'Chargeback',
    PaymentStateTransition: 'PaymentStateTransition'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "merchant" | "apiKey" | "webhook" | "apiLog" | "user" | "card" | "order" | "payment" | "ledgerEntries" | "webhookDelivery" | "idempotencyKey" | "refund" | "chargeback" | "paymentStateTransition"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Merchant: {
        payload: Prisma.$MerchantPayload<ExtArgs>
        fields: Prisma.MerchantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerchantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerchantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findFirst: {
            args: Prisma.MerchantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerchantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          findMany: {
            args: Prisma.MerchantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          create: {
            args: Prisma.MerchantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          createMany: {
            args: Prisma.MerchantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerchantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          delete: {
            args: Prisma.MerchantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          update: {
            args: Prisma.MerchantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          deleteMany: {
            args: Prisma.MerchantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerchantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MerchantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>[]
          }
          upsert: {
            args: Prisma.MerchantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerchantPayload>
          }
          aggregate: {
            args: Prisma.MerchantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerchant>
          }
          groupBy: {
            args: Prisma.MerchantGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerchantGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerchantCountArgs<ExtArgs>
            result: $Utils.Optional<MerchantCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Webhook: {
        payload: Prisma.$WebhookPayload<ExtArgs>
        fields: Prisma.WebhookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          findFirst: {
            args: Prisma.WebhookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          findMany: {
            args: Prisma.WebhookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>[]
          }
          create: {
            args: Prisma.WebhookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          createMany: {
            args: Prisma.WebhookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>[]
          }
          delete: {
            args: Prisma.WebhookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          update: {
            args: Prisma.WebhookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          deleteMany: {
            args: Prisma.WebhookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>[]
          }
          upsert: {
            args: Prisma.WebhookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookPayload>
          }
          aggregate: {
            args: Prisma.WebhookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhook>
          }
          groupBy: {
            args: Prisma.WebhookGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookCountAggregateOutputType> | number
          }
        }
      }
      ApiLog: {
        payload: Prisma.$ApiLogPayload<ExtArgs>
        fields: Prisma.ApiLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>
          }
          findFirst: {
            args: Prisma.ApiLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>
          }
          findMany: {
            args: Prisma.ApiLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>[]
          }
          create: {
            args: Prisma.ApiLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>
          }
          createMany: {
            args: Prisma.ApiLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>[]
          }
          delete: {
            args: Prisma.ApiLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>
          }
          update: {
            args: Prisma.ApiLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>
          }
          deleteMany: {
            args: Prisma.ApiLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>[]
          }
          upsert: {
            args: Prisma.ApiLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiLogPayload>
          }
          aggregate: {
            args: Prisma.ApiLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiLog>
          }
          groupBy: {
            args: Prisma.ApiLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiLogCountArgs<ExtArgs>
            result: $Utils.Optional<ApiLogCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      LedgerEntries: {
        payload: Prisma.$LedgerEntriesPayload<ExtArgs>
        fields: Prisma.LedgerEntriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerEntriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerEntriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>
          }
          findFirst: {
            args: Prisma.LedgerEntriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerEntriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>
          }
          findMany: {
            args: Prisma.LedgerEntriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>[]
          }
          create: {
            args: Prisma.LedgerEntriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>
          }
          createMany: {
            args: Prisma.LedgerEntriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerEntriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>[]
          }
          delete: {
            args: Prisma.LedgerEntriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>
          }
          update: {
            args: Prisma.LedgerEntriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>
          }
          deleteMany: {
            args: Prisma.LedgerEntriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerEntriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerEntriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>[]
          }
          upsert: {
            args: Prisma.LedgerEntriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEntriesPayload>
          }
          aggregate: {
            args: Prisma.LedgerEntriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerEntries>
          }
          groupBy: {
            args: Prisma.LedgerEntriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerEntriesCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerEntriesCountAggregateOutputType> | number
          }
        }
      }
      WebhookDelivery: {
        payload: Prisma.$WebhookDeliveryPayload<ExtArgs>
        fields: Prisma.WebhookDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          findFirst: {
            args: Prisma.WebhookDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          findMany: {
            args: Prisma.WebhookDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          create: {
            args: Prisma.WebhookDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          createMany: {
            args: Prisma.WebhookDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          delete: {
            args: Prisma.WebhookDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          update: {
            args: Prisma.WebhookDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.WebhookDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>[]
          }
          upsert: {
            args: Prisma.WebhookDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookDeliveryPayload>
          }
          aggregate: {
            args: Prisma.WebhookDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookDelivery>
          }
          groupBy: {
            args: Prisma.WebhookDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookDeliveryCountAggregateOutputType> | number
          }
        }
      }
      IdempotencyKey: {
        payload: Prisma.$IdempotencyKeyPayload<ExtArgs>
        fields: Prisma.IdempotencyKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdempotencyKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findFirst: {
            args: Prisma.IdempotencyKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          findMany: {
            args: Prisma.IdempotencyKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          create: {
            args: Prisma.IdempotencyKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          createMany: {
            args: Prisma.IdempotencyKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          delete: {
            args: Prisma.IdempotencyKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          update: {
            args: Prisma.IdempotencyKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          deleteMany: {
            args: Prisma.IdempotencyKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdempotencyKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>[]
          }
          upsert: {
            args: Prisma.IdempotencyKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdempotencyKeyPayload>
          }
          aggregate: {
            args: Prisma.IdempotencyKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdempotencyKey>
          }
          groupBy: {
            args: Prisma.IdempotencyKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdempotencyKeyCountArgs<ExtArgs>
            result: $Utils.Optional<IdempotencyKeyCountAggregateOutputType> | number
          }
        }
      }
      Refund: {
        payload: Prisma.$RefundPayload<ExtArgs>
        fields: Prisma.RefundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findFirst: {
            args: Prisma.RefundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          findMany: {
            args: Prisma.RefundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          create: {
            args: Prisma.RefundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          createMany: {
            args: Prisma.RefundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          delete: {
            args: Prisma.RefundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          update: {
            args: Prisma.RefundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          deleteMany: {
            args: Prisma.RefundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>[]
          }
          upsert: {
            args: Prisma.RefundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefundPayload>
          }
          aggregate: {
            args: Prisma.RefundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefund>
          }
          groupBy: {
            args: Prisma.RefundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefundCountArgs<ExtArgs>
            result: $Utils.Optional<RefundCountAggregateOutputType> | number
          }
        }
      }
      Chargeback: {
        payload: Prisma.$ChargebackPayload<ExtArgs>
        fields: Prisma.ChargebackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargebackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargebackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>
          }
          findFirst: {
            args: Prisma.ChargebackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargebackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>
          }
          findMany: {
            args: Prisma.ChargebackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>[]
          }
          create: {
            args: Prisma.ChargebackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>
          }
          createMany: {
            args: Prisma.ChargebackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargebackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>[]
          }
          delete: {
            args: Prisma.ChargebackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>
          }
          update: {
            args: Prisma.ChargebackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>
          }
          deleteMany: {
            args: Prisma.ChargebackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargebackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargebackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>[]
          }
          upsert: {
            args: Prisma.ChargebackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargebackPayload>
          }
          aggregate: {
            args: Prisma.ChargebackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChargeback>
          }
          groupBy: {
            args: Prisma.ChargebackGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargebackGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargebackCountArgs<ExtArgs>
            result: $Utils.Optional<ChargebackCountAggregateOutputType> | number
          }
        }
      }
      PaymentStateTransition: {
        payload: Prisma.$PaymentStateTransitionPayload<ExtArgs>
        fields: Prisma.PaymentStateTransitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentStateTransitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentStateTransitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>
          }
          findFirst: {
            args: Prisma.PaymentStateTransitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentStateTransitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>
          }
          findMany: {
            args: Prisma.PaymentStateTransitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>[]
          }
          create: {
            args: Prisma.PaymentStateTransitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>
          }
          createMany: {
            args: Prisma.PaymentStateTransitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentStateTransitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>[]
          }
          delete: {
            args: Prisma.PaymentStateTransitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>
          }
          update: {
            args: Prisma.PaymentStateTransitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>
          }
          deleteMany: {
            args: Prisma.PaymentStateTransitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentStateTransitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentStateTransitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>[]
          }
          upsert: {
            args: Prisma.PaymentStateTransitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentStateTransitionPayload>
          }
          aggregate: {
            args: Prisma.PaymentStateTransitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentStateTransition>
          }
          groupBy: {
            args: Prisma.PaymentStateTransitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentStateTransitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentStateTransitionCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentStateTransitionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    merchant?: MerchantOmit
    apiKey?: ApiKeyOmit
    webhook?: WebhookOmit
    apiLog?: ApiLogOmit
    user?: UserOmit
    card?: CardOmit
    order?: OrderOmit
    payment?: PaymentOmit
    ledgerEntries?: LedgerEntriesOmit
    webhookDelivery?: WebhookDeliveryOmit
    idempotencyKey?: IdempotencyKeyOmit
    refund?: RefundOmit
    chargeback?: ChargebackOmit
    paymentStateTransition?: PaymentStateTransitionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MerchantCountOutputType
   */

  export type MerchantCountOutputType = {
    apiKeys: number
    apiLogs: number
    idempotencyKeys: number
    orders: number
    webhooks: number
  }

  export type MerchantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | MerchantCountOutputTypeCountApiKeysArgs
    apiLogs?: boolean | MerchantCountOutputTypeCountApiLogsArgs
    idempotencyKeys?: boolean | MerchantCountOutputTypeCountIdempotencyKeysArgs
    orders?: boolean | MerchantCountOutputTypeCountOrdersArgs
    webhooks?: boolean | MerchantCountOutputTypeCountWebhooksArgs
  }

  // Custom InputTypes
  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerchantCountOutputType
     */
    select?: MerchantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountApiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiLogWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountIdempotencyKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdempotencyKeyWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * MerchantCountOutputType without action
   */
  export type MerchantCountOutputTypeCountWebhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cards: number
    ledgerEntries: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | UserCountOutputTypeCountCardsArgs
    ledgerEntries?: boolean | UserCountOutputTypeCountLedgerEntriesArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLedgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntriesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    payments: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | OrderCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    chargebacks: number
    transitions: number
    refunds: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chargebacks?: boolean | PaymentCountOutputTypeCountChargebacksArgs
    transitions?: boolean | PaymentCountOutputTypeCountTransitionsArgs
    refunds?: boolean | PaymentCountOutputTypeCountRefundsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountChargebacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargebackWhereInput
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountTransitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentStateTransitionWhereInput
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountRefundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Merchant
   */

  export type AggregateMerchant = {
    _count: MerchantCountAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  export type MerchantMinAggregateOutputType = {
    id: string | null
    name: string | null
    publicKey: string | null
    secretKeyHash: string | null
    status: $Enums.MerchantStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    businessName: string | null
    email: string | null
    emailVerified: boolean | null
    otpCode: string | null
    otpExpiry: Date | null
    passwordHash: string | null
    secretKey: string | null
  }

  export type MerchantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    publicKey: string | null
    secretKeyHash: string | null
    status: $Enums.MerchantStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    businessName: string | null
    email: string | null
    emailVerified: boolean | null
    otpCode: string | null
    otpExpiry: Date | null
    passwordHash: string | null
    secretKey: string | null
  }

  export type MerchantCountAggregateOutputType = {
    id: number
    name: number
    publicKey: number
    secretKeyHash: number
    status: number
    createdAt: number
    updatedAt: number
    businessName: number
    email: number
    emailVerified: number
    otpCode: number
    otpExpiry: number
    passwordHash: number
    secretKey: number
    _all: number
  }


  export type MerchantMinAggregateInputType = {
    id?: true
    name?: true
    publicKey?: true
    secretKeyHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    businessName?: true
    email?: true
    emailVerified?: true
    otpCode?: true
    otpExpiry?: true
    passwordHash?: true
    secretKey?: true
  }

  export type MerchantMaxAggregateInputType = {
    id?: true
    name?: true
    publicKey?: true
    secretKeyHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    businessName?: true
    email?: true
    emailVerified?: true
    otpCode?: true
    otpExpiry?: true
    passwordHash?: true
    secretKey?: true
  }

  export type MerchantCountAggregateInputType = {
    id?: true
    name?: true
    publicKey?: true
    secretKeyHash?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    businessName?: true
    email?: true
    emailVerified?: true
    otpCode?: true
    otpExpiry?: true
    passwordHash?: true
    secretKey?: true
    _all?: true
  }

  export type MerchantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchant to aggregate.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Merchants
    **/
    _count?: true | MerchantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerchantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerchantMaxAggregateInputType
  }

  export type GetMerchantAggregateType<T extends MerchantAggregateArgs> = {
        [P in keyof T & keyof AggregateMerchant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerchant[P]>
      : GetScalarType<T[P], AggregateMerchant[P]>
  }




  export type MerchantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerchantWhereInput
    orderBy?: MerchantOrderByWithAggregationInput | MerchantOrderByWithAggregationInput[]
    by: MerchantScalarFieldEnum[] | MerchantScalarFieldEnum
    having?: MerchantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerchantCountAggregateInputType | true
    _min?: MerchantMinAggregateInputType
    _max?: MerchantMaxAggregateInputType
  }

  export type MerchantGroupByOutputType = {
    id: string
    name: string
    publicKey: string
    secretKeyHash: string
    status: $Enums.MerchantStatus
    createdAt: Date
    updatedAt: Date
    businessName: string | null
    email: string
    emailVerified: boolean
    otpCode: string | null
    otpExpiry: Date | null
    passwordHash: string
    secretKey: string | null
    _count: MerchantCountAggregateOutputType | null
    _min: MerchantMinAggregateOutputType | null
    _max: MerchantMaxAggregateOutputType | null
  }

  type GetMerchantGroupByPayload<T extends MerchantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerchantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerchantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerchantGroupByOutputType[P]>
            : GetScalarType<T[P], MerchantGroupByOutputType[P]>
        }
      >
    >


  export type MerchantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    publicKey?: boolean
    secretKeyHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessName?: boolean
    email?: boolean
    emailVerified?: boolean
    otpCode?: boolean
    otpExpiry?: boolean
    passwordHash?: boolean
    secretKey?: boolean
    apiKeys?: boolean | Merchant$apiKeysArgs<ExtArgs>
    apiLogs?: boolean | Merchant$apiLogsArgs<ExtArgs>
    idempotencyKeys?: boolean | Merchant$idempotencyKeysArgs<ExtArgs>
    orders?: boolean | Merchant$ordersArgs<ExtArgs>
    webhooks?: boolean | Merchant$webhooksArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    publicKey?: boolean
    secretKeyHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessName?: boolean
    email?: boolean
    emailVerified?: boolean
    otpCode?: boolean
    otpExpiry?: boolean
    passwordHash?: boolean
    secretKey?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    publicKey?: boolean
    secretKeyHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessName?: boolean
    email?: boolean
    emailVerified?: boolean
    otpCode?: boolean
    otpExpiry?: boolean
    passwordHash?: boolean
    secretKey?: boolean
  }, ExtArgs["result"]["merchant"]>

  export type MerchantSelectScalar = {
    id?: boolean
    name?: boolean
    publicKey?: boolean
    secretKeyHash?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    businessName?: boolean
    email?: boolean
    emailVerified?: boolean
    otpCode?: boolean
    otpExpiry?: boolean
    passwordHash?: boolean
    secretKey?: boolean
  }

  export type MerchantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "publicKey" | "secretKeyHash" | "status" | "createdAt" | "updatedAt" | "businessName" | "email" | "emailVerified" | "otpCode" | "otpExpiry" | "passwordHash" | "secretKey", ExtArgs["result"]["merchant"]>
  export type MerchantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apiKeys?: boolean | Merchant$apiKeysArgs<ExtArgs>
    apiLogs?: boolean | Merchant$apiLogsArgs<ExtArgs>
    idempotencyKeys?: boolean | Merchant$idempotencyKeysArgs<ExtArgs>
    orders?: boolean | Merchant$ordersArgs<ExtArgs>
    webhooks?: boolean | Merchant$webhooksArgs<ExtArgs>
    _count?: boolean | MerchantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MerchantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MerchantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MerchantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Merchant"
    objects: {
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      apiLogs: Prisma.$ApiLogPayload<ExtArgs>[]
      idempotencyKeys: Prisma.$IdempotencyKeyPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      webhooks: Prisma.$WebhookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      publicKey: string
      secretKeyHash: string
      status: $Enums.MerchantStatus
      createdAt: Date
      updatedAt: Date
      businessName: string | null
      email: string
      emailVerified: boolean
      otpCode: string | null
      otpExpiry: Date | null
      passwordHash: string
      secretKey: string | null
    }, ExtArgs["result"]["merchant"]>
    composites: {}
  }

  type MerchantGetPayload<S extends boolean | null | undefined | MerchantDefaultArgs> = $Result.GetResult<Prisma.$MerchantPayload, S>

  type MerchantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MerchantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MerchantCountAggregateInputType | true
    }

  export interface MerchantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Merchant'], meta: { name: 'Merchant' } }
    /**
     * Find zero or one Merchant that matches the filter.
     * @param {MerchantFindUniqueArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerchantFindUniqueArgs>(args: SelectSubset<T, MerchantFindUniqueArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Merchant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MerchantFindUniqueOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerchantFindUniqueOrThrowArgs>(args: SelectSubset<T, MerchantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerchantFindFirstArgs>(args?: SelectSubset<T, MerchantFindFirstArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Merchant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindFirstOrThrowArgs} args - Arguments to find a Merchant
     * @example
     * // Get one Merchant
     * const merchant = await prisma.merchant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerchantFindFirstOrThrowArgs>(args?: SelectSubset<T, MerchantFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Merchants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Merchants
     * const merchants = await prisma.merchant.findMany()
     * 
     * // Get first 10 Merchants
     * const merchants = await prisma.merchant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merchantWithIdOnly = await prisma.merchant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerchantFindManyArgs>(args?: SelectSubset<T, MerchantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Merchant.
     * @param {MerchantCreateArgs} args - Arguments to create a Merchant.
     * @example
     * // Create one Merchant
     * const Merchant = await prisma.merchant.create({
     *   data: {
     *     // ... data to create a Merchant
     *   }
     * })
     * 
     */
    create<T extends MerchantCreateArgs>(args: SelectSubset<T, MerchantCreateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Merchants.
     * @param {MerchantCreateManyArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerchantCreateManyArgs>(args?: SelectSubset<T, MerchantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Merchants and returns the data saved in the database.
     * @param {MerchantCreateManyAndReturnArgs} args - Arguments to create many Merchants.
     * @example
     * // Create many Merchants
     * const merchant = await prisma.merchant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerchantCreateManyAndReturnArgs>(args?: SelectSubset<T, MerchantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Merchant.
     * @param {MerchantDeleteArgs} args - Arguments to delete one Merchant.
     * @example
     * // Delete one Merchant
     * const Merchant = await prisma.merchant.delete({
     *   where: {
     *     // ... filter to delete one Merchant
     *   }
     * })
     * 
     */
    delete<T extends MerchantDeleteArgs>(args: SelectSubset<T, MerchantDeleteArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Merchant.
     * @param {MerchantUpdateArgs} args - Arguments to update one Merchant.
     * @example
     * // Update one Merchant
     * const merchant = await prisma.merchant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerchantUpdateArgs>(args: SelectSubset<T, MerchantUpdateArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Merchants.
     * @param {MerchantDeleteManyArgs} args - Arguments to filter Merchants to delete.
     * @example
     * // Delete a few Merchants
     * const { count } = await prisma.merchant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerchantDeleteManyArgs>(args?: SelectSubset<T, MerchantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerchantUpdateManyArgs>(args: SelectSubset<T, MerchantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Merchants and returns the data updated in the database.
     * @param {MerchantUpdateManyAndReturnArgs} args - Arguments to update many Merchants.
     * @example
     * // Update many Merchants
     * const merchant = await prisma.merchant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Merchants and only return the `id`
     * const merchantWithIdOnly = await prisma.merchant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MerchantUpdateManyAndReturnArgs>(args: SelectSubset<T, MerchantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Merchant.
     * @param {MerchantUpsertArgs} args - Arguments to update or create a Merchant.
     * @example
     * // Update or create a Merchant
     * const merchant = await prisma.merchant.upsert({
     *   create: {
     *     // ... data to create a Merchant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Merchant we want to update
     *   }
     * })
     */
    upsert<T extends MerchantUpsertArgs>(args: SelectSubset<T, MerchantUpsertArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Merchants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantCountArgs} args - Arguments to filter Merchants to count.
     * @example
     * // Count the number of Merchants
     * const count = await prisma.merchant.count({
     *   where: {
     *     // ... the filter for the Merchants we want to count
     *   }
     * })
    **/
    count<T extends MerchantCountArgs>(
      args?: Subset<T, MerchantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerchantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerchantAggregateArgs>(args: Subset<T, MerchantAggregateArgs>): Prisma.PrismaPromise<GetMerchantAggregateType<T>>

    /**
     * Group by Merchant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerchantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MerchantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerchantGroupByArgs['orderBy'] }
        : { orderBy?: MerchantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MerchantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerchantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Merchant model
   */
  readonly fields: MerchantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Merchant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerchantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apiKeys<T extends Merchant$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiLogs<T extends Merchant$apiLogsArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$apiLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    idempotencyKeys<T extends Merchant$idempotencyKeysArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$idempotencyKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Merchant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    webhooks<T extends Merchant$webhooksArgs<ExtArgs> = {}>(args?: Subset<T, Merchant$webhooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Merchant model
   */
  interface MerchantFieldRefs {
    readonly id: FieldRef<"Merchant", 'String'>
    readonly name: FieldRef<"Merchant", 'String'>
    readonly publicKey: FieldRef<"Merchant", 'String'>
    readonly secretKeyHash: FieldRef<"Merchant", 'String'>
    readonly status: FieldRef<"Merchant", 'MerchantStatus'>
    readonly createdAt: FieldRef<"Merchant", 'DateTime'>
    readonly updatedAt: FieldRef<"Merchant", 'DateTime'>
    readonly businessName: FieldRef<"Merchant", 'String'>
    readonly email: FieldRef<"Merchant", 'String'>
    readonly emailVerified: FieldRef<"Merchant", 'Boolean'>
    readonly otpCode: FieldRef<"Merchant", 'String'>
    readonly otpExpiry: FieldRef<"Merchant", 'DateTime'>
    readonly passwordHash: FieldRef<"Merchant", 'String'>
    readonly secretKey: FieldRef<"Merchant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Merchant findUnique
   */
  export type MerchantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findUniqueOrThrow
   */
  export type MerchantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant findFirst
   */
  export type MerchantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findFirstOrThrow
   */
  export type MerchantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchant to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Merchants.
     */
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant findMany
   */
  export type MerchantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter, which Merchants to fetch.
     */
    where?: MerchantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Merchants to fetch.
     */
    orderBy?: MerchantOrderByWithRelationInput | MerchantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Merchants.
     */
    cursor?: MerchantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Merchants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Merchants.
     */
    skip?: number
    distinct?: MerchantScalarFieldEnum | MerchantScalarFieldEnum[]
  }

  /**
   * Merchant create
   */
  export type MerchantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to create a Merchant.
     */
    data: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
  }

  /**
   * Merchant createMany
   */
  export type MerchantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant createManyAndReturn
   */
  export type MerchantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data used to create many Merchants.
     */
    data: MerchantCreateManyInput | MerchantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Merchant update
   */
  export type MerchantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The data needed to update a Merchant.
     */
    data: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
    /**
     * Choose, which Merchant to update.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant updateMany
   */
  export type MerchantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to update.
     */
    limit?: number
  }

  /**
   * Merchant updateManyAndReturn
   */
  export type MerchantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * The data used to update Merchants.
     */
    data: XOR<MerchantUpdateManyMutationInput, MerchantUncheckedUpdateManyInput>
    /**
     * Filter which Merchants to update
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to update.
     */
    limit?: number
  }

  /**
   * Merchant upsert
   */
  export type MerchantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * The filter to search for the Merchant to update in case it exists.
     */
    where: MerchantWhereUniqueInput
    /**
     * In case the Merchant found by the `where` argument doesn't exist, create a new Merchant with this data.
     */
    create: XOR<MerchantCreateInput, MerchantUncheckedCreateInput>
    /**
     * In case the Merchant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerchantUpdateInput, MerchantUncheckedUpdateInput>
  }

  /**
   * Merchant delete
   */
  export type MerchantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
    /**
     * Filter which Merchant to delete.
     */
    where: MerchantWhereUniqueInput
  }

  /**
   * Merchant deleteMany
   */
  export type MerchantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Merchants to delete
     */
    where?: MerchantWhereInput
    /**
     * Limit how many Merchants to delete.
     */
    limit?: number
  }

  /**
   * Merchant.apiKeys
   */
  export type Merchant$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * Merchant.apiLogs
   */
  export type Merchant$apiLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    where?: ApiLogWhereInput
    orderBy?: ApiLogOrderByWithRelationInput | ApiLogOrderByWithRelationInput[]
    cursor?: ApiLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiLogScalarFieldEnum | ApiLogScalarFieldEnum[]
  }

  /**
   * Merchant.idempotencyKeys
   */
  export type Merchant$idempotencyKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    where?: IdempotencyKeyWhereInput
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    cursor?: IdempotencyKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * Merchant.orders
   */
  export type Merchant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Merchant.webhooks
   */
  export type Merchant$webhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    where?: WebhookWhereInput
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    cursor?: WebhookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * Merchant without action
   */
  export type MerchantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Merchant
     */
    select?: MerchantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Merchant
     */
    omit?: MerchantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MerchantInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    publicKey: string | null
    secretKeyHash: string | null
    environment: string | null
    createdAt: Date | null
    revokedAt: Date | null
    lastUsedAt: Date | null
    secretKey: string | null
    name: string | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    publicKey: string | null
    secretKeyHash: string | null
    environment: string | null
    createdAt: Date | null
    revokedAt: Date | null
    lastUsedAt: Date | null
    secretKey: string | null
    name: string | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    merchantId: number
    publicKey: number
    secretKeyHash: number
    environment: number
    createdAt: number
    revokedAt: number
    lastUsedAt: number
    secretKey: number
    name: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    merchantId?: true
    publicKey?: true
    secretKeyHash?: true
    environment?: true
    createdAt?: true
    revokedAt?: true
    lastUsedAt?: true
    secretKey?: true
    name?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    merchantId?: true
    publicKey?: true
    secretKeyHash?: true
    environment?: true
    createdAt?: true
    revokedAt?: true
    lastUsedAt?: true
    secretKey?: true
    name?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    merchantId?: true
    publicKey?: true
    secretKeyHash?: true
    environment?: true
    createdAt?: true
    revokedAt?: true
    lastUsedAt?: true
    secretKey?: true
    name?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    merchantId: string
    publicKey: string
    secretKeyHash: string
    environment: string
    createdAt: Date
    revokedAt: Date | null
    lastUsedAt: Date | null
    secretKey: string | null
    name: string
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    publicKey?: boolean
    secretKeyHash?: boolean
    environment?: boolean
    createdAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    secretKey?: boolean
    name?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    publicKey?: boolean
    secretKeyHash?: boolean
    environment?: boolean
    createdAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    secretKey?: boolean
    name?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    publicKey?: boolean
    secretKeyHash?: boolean
    environment?: boolean
    createdAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    secretKey?: boolean
    name?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    merchantId?: boolean
    publicKey?: boolean
    secretKeyHash?: boolean
    environment?: boolean
    createdAt?: boolean
    revokedAt?: boolean
    lastUsedAt?: boolean
    secretKey?: boolean
    name?: boolean
  }

  export type ApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantId" | "publicKey" | "secretKeyHash" | "environment" | "createdAt" | "revokedAt" | "lastUsedAt" | "secretKey" | "name", ExtArgs["result"]["apiKey"]>
  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      publicKey: string
      secretKeyHash: string
      environment: string
      createdAt: Date
      revokedAt: Date | null
      lastUsedAt: Date | null
      secretKey: string | null
      name: string
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys and returns the data updated in the database.
     * @param {ApiKeyUpdateManyAndReturnArgs} args - Arguments to update many ApiKeys.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly merchantId: FieldRef<"ApiKey", 'String'>
    readonly publicKey: FieldRef<"ApiKey", 'String'>
    readonly secretKeyHash: FieldRef<"ApiKey", 'String'>
    readonly environment: FieldRef<"ApiKey", 'String'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
    readonly revokedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly secretKey: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
  }

  /**
   * ApiKey updateManyAndReturn
   */
  export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
    /**
     * Limit how many ApiKeys to delete.
     */
    limit?: number
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiKey
     */
    omit?: ApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Webhook
   */

  export type AggregateWebhook = {
    _count: WebhookCountAggregateOutputType | null
    _min: WebhookMinAggregateOutputType | null
    _max: WebhookMaxAggregateOutputType | null
  }

  export type WebhookMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    url: string | null
    secret: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    url: string | null
    secret: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookCountAggregateOutputType = {
    id: number
    merchantId: number
    url: number
    events: number
    secret: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebhookMinAggregateInputType = {
    id?: true
    merchantId?: true
    url?: true
    secret?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookMaxAggregateInputType = {
    id?: true
    merchantId?: true
    url?: true
    secret?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookCountAggregateInputType = {
    id?: true
    merchantId?: true
    url?: true
    events?: true
    secret?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebhookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webhook to aggregate.
     */
    where?: WebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webhooks to fetch.
     */
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Webhooks
    **/
    _count?: true | WebhookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookMaxAggregateInputType
  }

  export type GetWebhookAggregateType<T extends WebhookAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhook[P]>
      : GetScalarType<T[P], AggregateWebhook[P]>
  }




  export type WebhookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookWhereInput
    orderBy?: WebhookOrderByWithAggregationInput | WebhookOrderByWithAggregationInput[]
    by: WebhookScalarFieldEnum[] | WebhookScalarFieldEnum
    having?: WebhookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookCountAggregateInputType | true
    _min?: WebhookMinAggregateInputType
    _max?: WebhookMaxAggregateInputType
  }

  export type WebhookGroupByOutputType = {
    id: string
    merchantId: string
    url: string
    events: string[]
    secret: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: WebhookCountAggregateOutputType | null
    _min: WebhookMinAggregateOutputType | null
    _max: WebhookMaxAggregateOutputType | null
  }

  type GetWebhookGroupByPayload<T extends WebhookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookGroupByOutputType[P]>
        }
      >
    >


  export type WebhookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    url?: boolean
    events?: boolean
    secret?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook"]>

  export type WebhookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    url?: boolean
    events?: boolean
    secret?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook"]>

  export type WebhookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    url?: boolean
    events?: boolean
    secret?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhook"]>

  export type WebhookSelectScalar = {
    id?: boolean
    merchantId?: boolean
    url?: boolean
    events?: boolean
    secret?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebhookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantId" | "url" | "events" | "secret" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["webhook"]>
  export type WebhookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type WebhookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type WebhookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $WebhookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Webhook"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      url: string
      events: string[]
      secret: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webhook"]>
    composites: {}
  }

  type WebhookGetPayload<S extends boolean | null | undefined | WebhookDefaultArgs> = $Result.GetResult<Prisma.$WebhookPayload, S>

  type WebhookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookCountAggregateInputType | true
    }

  export interface WebhookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Webhook'], meta: { name: 'Webhook' } }
    /**
     * Find zero or one Webhook that matches the filter.
     * @param {WebhookFindUniqueArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookFindUniqueArgs>(args: SelectSubset<T, WebhookFindUniqueArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Webhook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookFindUniqueOrThrowArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookFindFirstArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookFindFirstArgs>(args?: SelectSubset<T, WebhookFindFirstArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Webhook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookFindFirstOrThrowArgs} args - Arguments to find a Webhook
     * @example
     * // Get one Webhook
     * const webhook = await prisma.webhook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Webhooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webhooks
     * const webhooks = await prisma.webhook.findMany()
     * 
     * // Get first 10 Webhooks
     * const webhooks = await prisma.webhook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookWithIdOnly = await prisma.webhook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookFindManyArgs>(args?: SelectSubset<T, WebhookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Webhook.
     * @param {WebhookCreateArgs} args - Arguments to create a Webhook.
     * @example
     * // Create one Webhook
     * const Webhook = await prisma.webhook.create({
     *   data: {
     *     // ... data to create a Webhook
     *   }
     * })
     * 
     */
    create<T extends WebhookCreateArgs>(args: SelectSubset<T, WebhookCreateArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Webhooks.
     * @param {WebhookCreateManyArgs} args - Arguments to create many Webhooks.
     * @example
     * // Create many Webhooks
     * const webhook = await prisma.webhook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookCreateManyArgs>(args?: SelectSubset<T, WebhookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Webhooks and returns the data saved in the database.
     * @param {WebhookCreateManyAndReturnArgs} args - Arguments to create many Webhooks.
     * @example
     * // Create many Webhooks
     * const webhook = await prisma.webhook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Webhooks and only return the `id`
     * const webhookWithIdOnly = await prisma.webhook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Webhook.
     * @param {WebhookDeleteArgs} args - Arguments to delete one Webhook.
     * @example
     * // Delete one Webhook
     * const Webhook = await prisma.webhook.delete({
     *   where: {
     *     // ... filter to delete one Webhook
     *   }
     * })
     * 
     */
    delete<T extends WebhookDeleteArgs>(args: SelectSubset<T, WebhookDeleteArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Webhook.
     * @param {WebhookUpdateArgs} args - Arguments to update one Webhook.
     * @example
     * // Update one Webhook
     * const webhook = await prisma.webhook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookUpdateArgs>(args: SelectSubset<T, WebhookUpdateArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Webhooks.
     * @param {WebhookDeleteManyArgs} args - Arguments to filter Webhooks to delete.
     * @example
     * // Delete a few Webhooks
     * const { count } = await prisma.webhook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookDeleteManyArgs>(args?: SelectSubset<T, WebhookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webhooks
     * const webhook = await prisma.webhook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookUpdateManyArgs>(args: SelectSubset<T, WebhookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webhooks and returns the data updated in the database.
     * @param {WebhookUpdateManyAndReturnArgs} args - Arguments to update many Webhooks.
     * @example
     * // Update many Webhooks
     * const webhook = await prisma.webhook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Webhooks and only return the `id`
     * const webhookWithIdOnly = await prisma.webhook.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Webhook.
     * @param {WebhookUpsertArgs} args - Arguments to update or create a Webhook.
     * @example
     * // Update or create a Webhook
     * const webhook = await prisma.webhook.upsert({
     *   create: {
     *     // ... data to create a Webhook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webhook we want to update
     *   }
     * })
     */
    upsert<T extends WebhookUpsertArgs>(args: SelectSubset<T, WebhookUpsertArgs<ExtArgs>>): Prisma__WebhookClient<$Result.GetResult<Prisma.$WebhookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Webhooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookCountArgs} args - Arguments to filter Webhooks to count.
     * @example
     * // Count the number of Webhooks
     * const count = await prisma.webhook.count({
     *   where: {
     *     // ... the filter for the Webhooks we want to count
     *   }
     * })
    **/
    count<T extends WebhookCountArgs>(
      args?: Subset<T, WebhookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookAggregateArgs>(args: Subset<T, WebhookAggregateArgs>): Prisma.PrismaPromise<GetWebhookAggregateType<T>>

    /**
     * Group by Webhook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookGroupByArgs['orderBy'] }
        : { orderBy?: WebhookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Webhook model
   */
  readonly fields: WebhookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Webhook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Webhook model
   */
  interface WebhookFieldRefs {
    readonly id: FieldRef<"Webhook", 'String'>
    readonly merchantId: FieldRef<"Webhook", 'String'>
    readonly url: FieldRef<"Webhook", 'String'>
    readonly events: FieldRef<"Webhook", 'String[]'>
    readonly secret: FieldRef<"Webhook", 'String'>
    readonly status: FieldRef<"Webhook", 'String'>
    readonly createdAt: FieldRef<"Webhook", 'DateTime'>
    readonly updatedAt: FieldRef<"Webhook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Webhook findUnique
   */
  export type WebhookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhook to fetch.
     */
    where: WebhookWhereUniqueInput
  }

  /**
   * Webhook findUniqueOrThrow
   */
  export type WebhookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhook to fetch.
     */
    where: WebhookWhereUniqueInput
  }

  /**
   * Webhook findFirst
   */
  export type WebhookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhook to fetch.
     */
    where?: WebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webhooks to fetch.
     */
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webhooks.
     */
    cursor?: WebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * Webhook findFirstOrThrow
   */
  export type WebhookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhook to fetch.
     */
    where?: WebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webhooks to fetch.
     */
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Webhooks.
     */
    cursor?: WebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webhooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Webhooks.
     */
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * Webhook findMany
   */
  export type WebhookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter, which Webhooks to fetch.
     */
    where?: WebhookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Webhooks to fetch.
     */
    orderBy?: WebhookOrderByWithRelationInput | WebhookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Webhooks.
     */
    cursor?: WebhookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Webhooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Webhooks.
     */
    skip?: number
    distinct?: WebhookScalarFieldEnum | WebhookScalarFieldEnum[]
  }

  /**
   * Webhook create
   */
  export type WebhookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * The data needed to create a Webhook.
     */
    data: XOR<WebhookCreateInput, WebhookUncheckedCreateInput>
  }

  /**
   * Webhook createMany
   */
  export type WebhookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Webhooks.
     */
    data: WebhookCreateManyInput | WebhookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Webhook createManyAndReturn
   */
  export type WebhookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * The data used to create many Webhooks.
     */
    data: WebhookCreateManyInput | WebhookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webhook update
   */
  export type WebhookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * The data needed to update a Webhook.
     */
    data: XOR<WebhookUpdateInput, WebhookUncheckedUpdateInput>
    /**
     * Choose, which Webhook to update.
     */
    where: WebhookWhereUniqueInput
  }

  /**
   * Webhook updateMany
   */
  export type WebhookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Webhooks.
     */
    data: XOR<WebhookUpdateManyMutationInput, WebhookUncheckedUpdateManyInput>
    /**
     * Filter which Webhooks to update
     */
    where?: WebhookWhereInput
    /**
     * Limit how many Webhooks to update.
     */
    limit?: number
  }

  /**
   * Webhook updateManyAndReturn
   */
  export type WebhookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * The data used to update Webhooks.
     */
    data: XOR<WebhookUpdateManyMutationInput, WebhookUncheckedUpdateManyInput>
    /**
     * Filter which Webhooks to update
     */
    where?: WebhookWhereInput
    /**
     * Limit how many Webhooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Webhook upsert
   */
  export type WebhookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * The filter to search for the Webhook to update in case it exists.
     */
    where: WebhookWhereUniqueInput
    /**
     * In case the Webhook found by the `where` argument doesn't exist, create a new Webhook with this data.
     */
    create: XOR<WebhookCreateInput, WebhookUncheckedCreateInput>
    /**
     * In case the Webhook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookUpdateInput, WebhookUncheckedUpdateInput>
  }

  /**
   * Webhook delete
   */
  export type WebhookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
    /**
     * Filter which Webhook to delete.
     */
    where: WebhookWhereUniqueInput
  }

  /**
   * Webhook deleteMany
   */
  export type WebhookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Webhooks to delete
     */
    where?: WebhookWhereInput
    /**
     * Limit how many Webhooks to delete.
     */
    limit?: number
  }

  /**
   * Webhook without action
   */
  export type WebhookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webhook
     */
    select?: WebhookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Webhook
     */
    omit?: WebhookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookInclude<ExtArgs> | null
  }


  /**
   * Model ApiLog
   */

  export type AggregateApiLog = {
    _count: ApiLogCountAggregateOutputType | null
    _avg: ApiLogAvgAggregateOutputType | null
    _sum: ApiLogSumAggregateOutputType | null
    _min: ApiLogMinAggregateOutputType | null
    _max: ApiLogMaxAggregateOutputType | null
  }

  export type ApiLogAvgAggregateOutputType = {
    statusCode: number | null
  }

  export type ApiLogSumAggregateOutputType = {
    statusCode: number | null
  }

  export type ApiLogMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    endpoint: string | null
    method: string | null
    statusCode: number | null
    requestBody: string | null
    responseBody: string | null
    createdAt: Date | null
  }

  export type ApiLogMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    endpoint: string | null
    method: string | null
    statusCode: number | null
    requestBody: string | null
    responseBody: string | null
    createdAt: Date | null
  }

  export type ApiLogCountAggregateOutputType = {
    id: number
    merchantId: number
    endpoint: number
    method: number
    statusCode: number
    requestBody: number
    responseBody: number
    createdAt: number
    _all: number
  }


  export type ApiLogAvgAggregateInputType = {
    statusCode?: true
  }

  export type ApiLogSumAggregateInputType = {
    statusCode?: true
  }

  export type ApiLogMinAggregateInputType = {
    id?: true
    merchantId?: true
    endpoint?: true
    method?: true
    statusCode?: true
    requestBody?: true
    responseBody?: true
    createdAt?: true
  }

  export type ApiLogMaxAggregateInputType = {
    id?: true
    merchantId?: true
    endpoint?: true
    method?: true
    statusCode?: true
    requestBody?: true
    responseBody?: true
    createdAt?: true
  }

  export type ApiLogCountAggregateInputType = {
    id?: true
    merchantId?: true
    endpoint?: true
    method?: true
    statusCode?: true
    requestBody?: true
    responseBody?: true
    createdAt?: true
    _all?: true
  }

  export type ApiLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiLog to aggregate.
     */
    where?: ApiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiLogs to fetch.
     */
    orderBy?: ApiLogOrderByWithRelationInput | ApiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiLogs
    **/
    _count?: true | ApiLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiLogMaxAggregateInputType
  }

  export type GetApiLogAggregateType<T extends ApiLogAggregateArgs> = {
        [P in keyof T & keyof AggregateApiLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiLog[P]>
      : GetScalarType<T[P], AggregateApiLog[P]>
  }




  export type ApiLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiLogWhereInput
    orderBy?: ApiLogOrderByWithAggregationInput | ApiLogOrderByWithAggregationInput[]
    by: ApiLogScalarFieldEnum[] | ApiLogScalarFieldEnum
    having?: ApiLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiLogCountAggregateInputType | true
    _avg?: ApiLogAvgAggregateInputType
    _sum?: ApiLogSumAggregateInputType
    _min?: ApiLogMinAggregateInputType
    _max?: ApiLogMaxAggregateInputType
  }

  export type ApiLogGroupByOutputType = {
    id: string
    merchantId: string
    endpoint: string
    method: string
    statusCode: number
    requestBody: string | null
    responseBody: string | null
    createdAt: Date
    _count: ApiLogCountAggregateOutputType | null
    _avg: ApiLogAvgAggregateOutputType | null
    _sum: ApiLogSumAggregateOutputType | null
    _min: ApiLogMinAggregateOutputType | null
    _max: ApiLogMaxAggregateOutputType | null
  }

  type GetApiLogGroupByPayload<T extends ApiLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiLogGroupByOutputType[P]>
            : GetScalarType<T[P], ApiLogGroupByOutputType[P]>
        }
      >
    >


  export type ApiLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    requestBody?: boolean
    responseBody?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiLog"]>

  export type ApiLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    requestBody?: boolean
    responseBody?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiLog"]>

  export type ApiLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    requestBody?: boolean
    responseBody?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiLog"]>

  export type ApiLogSelectScalar = {
    id?: boolean
    merchantId?: boolean
    endpoint?: boolean
    method?: boolean
    statusCode?: boolean
    requestBody?: boolean
    responseBody?: boolean
    createdAt?: boolean
  }

  export type ApiLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantId" | "endpoint" | "method" | "statusCode" | "requestBody" | "responseBody" | "createdAt", ExtArgs["result"]["apiLog"]>
  export type ApiLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type ApiLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type ApiLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $ApiLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiLog"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      endpoint: string
      method: string
      statusCode: number
      requestBody: string | null
      responseBody: string | null
      createdAt: Date
    }, ExtArgs["result"]["apiLog"]>
    composites: {}
  }

  type ApiLogGetPayload<S extends boolean | null | undefined | ApiLogDefaultArgs> = $Result.GetResult<Prisma.$ApiLogPayload, S>

  type ApiLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiLogCountAggregateInputType | true
    }

  export interface ApiLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiLog'], meta: { name: 'ApiLog' } }
    /**
     * Find zero or one ApiLog that matches the filter.
     * @param {ApiLogFindUniqueArgs} args - Arguments to find a ApiLog
     * @example
     * // Get one ApiLog
     * const apiLog = await prisma.apiLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiLogFindUniqueArgs>(args: SelectSubset<T, ApiLogFindUniqueArgs<ExtArgs>>): Prisma__ApiLogClient<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApiLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiLogFindUniqueOrThrowArgs} args - Arguments to find a ApiLog
     * @example
     * // Get one ApiLog
     * const apiLog = await prisma.apiLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiLogClient<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiLogFindFirstArgs} args - Arguments to find a ApiLog
     * @example
     * // Get one ApiLog
     * const apiLog = await prisma.apiLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiLogFindFirstArgs>(args?: SelectSubset<T, ApiLogFindFirstArgs<ExtArgs>>): Prisma__ApiLogClient<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApiLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiLogFindFirstOrThrowArgs} args - Arguments to find a ApiLog
     * @example
     * // Get one ApiLog
     * const apiLog = await prisma.apiLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiLogClient<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApiLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiLogs
     * const apiLogs = await prisma.apiLog.findMany()
     * 
     * // Get first 10 ApiLogs
     * const apiLogs = await prisma.apiLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiLogWithIdOnly = await prisma.apiLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiLogFindManyArgs>(args?: SelectSubset<T, ApiLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApiLog.
     * @param {ApiLogCreateArgs} args - Arguments to create a ApiLog.
     * @example
     * // Create one ApiLog
     * const ApiLog = await prisma.apiLog.create({
     *   data: {
     *     // ... data to create a ApiLog
     *   }
     * })
     * 
     */
    create<T extends ApiLogCreateArgs>(args: SelectSubset<T, ApiLogCreateArgs<ExtArgs>>): Prisma__ApiLogClient<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApiLogs.
     * @param {ApiLogCreateManyArgs} args - Arguments to create many ApiLogs.
     * @example
     * // Create many ApiLogs
     * const apiLog = await prisma.apiLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiLogCreateManyArgs>(args?: SelectSubset<T, ApiLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiLogs and returns the data saved in the database.
     * @param {ApiLogCreateManyAndReturnArgs} args - Arguments to create many ApiLogs.
     * @example
     * // Create many ApiLogs
     * const apiLog = await prisma.apiLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiLogs and only return the `id`
     * const apiLogWithIdOnly = await prisma.apiLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApiLog.
     * @param {ApiLogDeleteArgs} args - Arguments to delete one ApiLog.
     * @example
     * // Delete one ApiLog
     * const ApiLog = await prisma.apiLog.delete({
     *   where: {
     *     // ... filter to delete one ApiLog
     *   }
     * })
     * 
     */
    delete<T extends ApiLogDeleteArgs>(args: SelectSubset<T, ApiLogDeleteArgs<ExtArgs>>): Prisma__ApiLogClient<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApiLog.
     * @param {ApiLogUpdateArgs} args - Arguments to update one ApiLog.
     * @example
     * // Update one ApiLog
     * const apiLog = await prisma.apiLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiLogUpdateArgs>(args: SelectSubset<T, ApiLogUpdateArgs<ExtArgs>>): Prisma__ApiLogClient<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApiLogs.
     * @param {ApiLogDeleteManyArgs} args - Arguments to filter ApiLogs to delete.
     * @example
     * // Delete a few ApiLogs
     * const { count } = await prisma.apiLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiLogDeleteManyArgs>(args?: SelectSubset<T, ApiLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiLogs
     * const apiLog = await prisma.apiLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiLogUpdateManyArgs>(args: SelectSubset<T, ApiLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiLogs and returns the data updated in the database.
     * @param {ApiLogUpdateManyAndReturnArgs} args - Arguments to update many ApiLogs.
     * @example
     * // Update many ApiLogs
     * const apiLog = await prisma.apiLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApiLogs and only return the `id`
     * const apiLogWithIdOnly = await prisma.apiLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApiLog.
     * @param {ApiLogUpsertArgs} args - Arguments to update or create a ApiLog.
     * @example
     * // Update or create a ApiLog
     * const apiLog = await prisma.apiLog.upsert({
     *   create: {
     *     // ... data to create a ApiLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiLog we want to update
     *   }
     * })
     */
    upsert<T extends ApiLogUpsertArgs>(args: SelectSubset<T, ApiLogUpsertArgs<ExtArgs>>): Prisma__ApiLogClient<$Result.GetResult<Prisma.$ApiLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApiLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiLogCountArgs} args - Arguments to filter ApiLogs to count.
     * @example
     * // Count the number of ApiLogs
     * const count = await prisma.apiLog.count({
     *   where: {
     *     // ... the filter for the ApiLogs we want to count
     *   }
     * })
    **/
    count<T extends ApiLogCountArgs>(
      args?: Subset<T, ApiLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiLogAggregateArgs>(args: Subset<T, ApiLogAggregateArgs>): Prisma.PrismaPromise<GetApiLogAggregateType<T>>

    /**
     * Group by ApiLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiLogGroupByArgs['orderBy'] }
        : { orderBy?: ApiLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiLog model
   */
  readonly fields: ApiLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiLog model
   */
  interface ApiLogFieldRefs {
    readonly id: FieldRef<"ApiLog", 'String'>
    readonly merchantId: FieldRef<"ApiLog", 'String'>
    readonly endpoint: FieldRef<"ApiLog", 'String'>
    readonly method: FieldRef<"ApiLog", 'String'>
    readonly statusCode: FieldRef<"ApiLog", 'Int'>
    readonly requestBody: FieldRef<"ApiLog", 'String'>
    readonly responseBody: FieldRef<"ApiLog", 'String'>
    readonly createdAt: FieldRef<"ApiLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiLog findUnique
   */
  export type ApiLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiLog to fetch.
     */
    where: ApiLogWhereUniqueInput
  }

  /**
   * ApiLog findUniqueOrThrow
   */
  export type ApiLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiLog to fetch.
     */
    where: ApiLogWhereUniqueInput
  }

  /**
   * ApiLog findFirst
   */
  export type ApiLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiLog to fetch.
     */
    where?: ApiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiLogs to fetch.
     */
    orderBy?: ApiLogOrderByWithRelationInput | ApiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiLogs.
     */
    cursor?: ApiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiLogs.
     */
    distinct?: ApiLogScalarFieldEnum | ApiLogScalarFieldEnum[]
  }

  /**
   * ApiLog findFirstOrThrow
   */
  export type ApiLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiLog to fetch.
     */
    where?: ApiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiLogs to fetch.
     */
    orderBy?: ApiLogOrderByWithRelationInput | ApiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiLogs.
     */
    cursor?: ApiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiLogs.
     */
    distinct?: ApiLogScalarFieldEnum | ApiLogScalarFieldEnum[]
  }

  /**
   * ApiLog findMany
   */
  export type ApiLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * Filter, which ApiLogs to fetch.
     */
    where?: ApiLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiLogs to fetch.
     */
    orderBy?: ApiLogOrderByWithRelationInput | ApiLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiLogs.
     */
    cursor?: ApiLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiLogs.
     */
    skip?: number
    distinct?: ApiLogScalarFieldEnum | ApiLogScalarFieldEnum[]
  }

  /**
   * ApiLog create
   */
  export type ApiLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiLog.
     */
    data: XOR<ApiLogCreateInput, ApiLogUncheckedCreateInput>
  }

  /**
   * ApiLog createMany
   */
  export type ApiLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiLogs.
     */
    data: ApiLogCreateManyInput | ApiLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiLog createManyAndReturn
   */
  export type ApiLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * The data used to create many ApiLogs.
     */
    data: ApiLogCreateManyInput | ApiLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiLog update
   */
  export type ApiLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiLog.
     */
    data: XOR<ApiLogUpdateInput, ApiLogUncheckedUpdateInput>
    /**
     * Choose, which ApiLog to update.
     */
    where: ApiLogWhereUniqueInput
  }

  /**
   * ApiLog updateMany
   */
  export type ApiLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiLogs.
     */
    data: XOR<ApiLogUpdateManyMutationInput, ApiLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiLogs to update
     */
    where?: ApiLogWhereInput
    /**
     * Limit how many ApiLogs to update.
     */
    limit?: number
  }

  /**
   * ApiLog updateManyAndReturn
   */
  export type ApiLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * The data used to update ApiLogs.
     */
    data: XOR<ApiLogUpdateManyMutationInput, ApiLogUncheckedUpdateManyInput>
    /**
     * Filter which ApiLogs to update
     */
    where?: ApiLogWhereInput
    /**
     * Limit how many ApiLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiLog upsert
   */
  export type ApiLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiLog to update in case it exists.
     */
    where: ApiLogWhereUniqueInput
    /**
     * In case the ApiLog found by the `where` argument doesn't exist, create a new ApiLog with this data.
     */
    create: XOR<ApiLogCreateInput, ApiLogUncheckedCreateInput>
    /**
     * In case the ApiLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiLogUpdateInput, ApiLogUncheckedUpdateInput>
  }

  /**
   * ApiLog delete
   */
  export type ApiLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
    /**
     * Filter which ApiLog to delete.
     */
    where: ApiLogWhereUniqueInput
  }

  /**
   * ApiLog deleteMany
   */
  export type ApiLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiLogs to delete
     */
    where?: ApiLogWhereInput
    /**
     * Limit how many ApiLogs to delete.
     */
    limit?: number
  }

  /**
   * ApiLog without action
   */
  export type ApiLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiLog
     */
    select?: ApiLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApiLog
     */
    omit?: ApiLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiLogInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    failedPinAttempts: number | null
  }

  export type UserSumAggregateOutputType = {
    failedPinAttempts: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    upiId: string | null
    status: string | null
    createdAt: Date | null
    passwordHash: string | null
    transactionPinHash: string | null
    failedPinAttempts: number | null
    lockedUntil: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    upiId: string | null
    status: string | null
    createdAt: Date | null
    passwordHash: string | null
    transactionPinHash: string | null
    failedPinAttempts: number | null
    lockedUntil: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    upiId: number
    status: number
    createdAt: number
    passwordHash: number
    transactionPinHash: number
    failedPinAttempts: number
    lockedUntil: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    failedPinAttempts?: true
  }

  export type UserSumAggregateInputType = {
    failedPinAttempts?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    upiId?: true
    status?: true
    createdAt?: true
    passwordHash?: true
    transactionPinHash?: true
    failedPinAttempts?: true
    lockedUntil?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    upiId?: true
    status?: true
    createdAt?: true
    passwordHash?: true
    transactionPinHash?: true
    failedPinAttempts?: true
    lockedUntil?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    upiId?: true
    status?: true
    createdAt?: true
    passwordHash?: true
    transactionPinHash?: true
    failedPinAttempts?: true
    lockedUntil?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    upiId: string
    status: string
    createdAt: Date
    passwordHash: string
    transactionPinHash: string | null
    failedPinAttempts: number
    lockedUntil: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    upiId?: boolean
    status?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    transactionPinHash?: boolean
    failedPinAttempts?: boolean
    lockedUntil?: boolean
    cards?: boolean | User$cardsArgs<ExtArgs>
    ledgerEntries?: boolean | User$ledgerEntriesArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    upiId?: boolean
    status?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    transactionPinHash?: boolean
    failedPinAttempts?: boolean
    lockedUntil?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    upiId?: boolean
    status?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    transactionPinHash?: boolean
    failedPinAttempts?: boolean
    lockedUntil?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    upiId?: boolean
    status?: boolean
    createdAt?: boolean
    passwordHash?: boolean
    transactionPinHash?: boolean
    failedPinAttempts?: boolean
    lockedUntil?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "upiId" | "status" | "createdAt" | "passwordHash" | "transactionPinHash" | "failedPinAttempts" | "lockedUntil", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | User$cardsArgs<ExtArgs>
    ledgerEntries?: boolean | User$ledgerEntriesArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cards: Prisma.$CardPayload<ExtArgs>[]
      ledgerEntries: Prisma.$LedgerEntriesPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      upiId: string
      status: string
      createdAt: Date
      passwordHash: string
      transactionPinHash: string | null
      failedPinAttempts: number
      lockedUntil: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends User$cardsArgs<ExtArgs> = {}>(args?: Subset<T, User$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ledgerEntries<T extends User$ledgerEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$ledgerEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly upiId: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly transactionPinHash: FieldRef<"User", 'String'>
    readonly failedPinAttempts: FieldRef<"User", 'Int'>
    readonly lockedUntil: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cards
   */
  export type User$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * User.ledgerEntries
   */
  export type User$ledgerEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    where?: LedgerEntriesWhereInput
    orderBy?: LedgerEntriesOrderByWithRelationInput | LedgerEntriesOrderByWithRelationInput[]
    cursor?: LedgerEntriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerEntriesScalarFieldEnum | LedgerEntriesScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    expiryMonth: number | null
    expiryYear: number | null
  }

  export type CardSumAggregateOutputType = {
    expiryMonth: number | null
    expiryYear: number | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cardNumber: string | null
    expiryMonth: number | null
    expiryYear: number | null
    cvvHash: string | null
    status: string | null
    createdAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cardNumber: string | null
    expiryMonth: number | null
    expiryYear: number | null
    cvvHash: string | null
    status: string | null
    createdAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    userId: number
    cardNumber: number
    expiryMonth: number
    expiryYear: number
    cvvHash: number
    status: number
    createdAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    expiryMonth?: true
    expiryYear?: true
  }

  export type CardSumAggregateInputType = {
    expiryMonth?: true
    expiryYear?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    userId?: true
    cardNumber?: true
    expiryMonth?: true
    expiryYear?: true
    cvvHash?: true
    status?: true
    createdAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    userId?: true
    cardNumber?: true
    expiryMonth?: true
    expiryYear?: true
    cvvHash?: true
    status?: true
    createdAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    userId?: true
    cardNumber?: true
    expiryMonth?: true
    expiryYear?: true
    cvvHash?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    userId: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    cvvHash: string
    status: string
    createdAt: Date
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardNumber?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    cvvHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardNumber?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    cvvHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardNumber?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    cvvHash?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    userId?: boolean
    cardNumber?: boolean
    expiryMonth?: boolean
    expiryYear?: boolean
    cvvHash?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cardNumber" | "expiryMonth" | "expiryYear" | "cvvHash" | "status" | "createdAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cardNumber: string
      expiryMonth: number
      expiryYear: number
      cvvHash: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly userId: FieldRef<"Card", 'String'>
    readonly cardNumber: FieldRef<"Card", 'String'>
    readonly expiryMonth: FieldRef<"Card", 'Int'>
    readonly expiryYear: FieldRef<"Card", 'Int'>
    readonly cvvHash: FieldRef<"Card", 'String'>
    readonly status: FieldRef<"Card", 'String'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    amountPaise: number | null
  }

  export type OrderSumAggregateOutputType = {
    amountPaise: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    amountPaise: number | null
    currency: string | null
    receipt: string | null
    status: $Enums.OrderStatus | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    amountPaise: number | null
    currency: string | null
    receipt: string | null
    status: $Enums.OrderStatus | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    merchantId: number
    amountPaise: number
    currency: number
    receipt: number
    status: number
    idempotencyKey: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    amountPaise?: true
  }

  export type OrderSumAggregateInputType = {
    amountPaise?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    merchantId?: true
    amountPaise?: true
    currency?: true
    receipt?: true
    status?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    merchantId?: true
    amountPaise?: true
    currency?: true
    receipt?: true
    status?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    merchantId?: true
    amountPaise?: true
    currency?: true
    receipt?: true
    status?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    merchantId: string
    amountPaise: number
    currency: string
    receipt: string | null
    status: $Enums.OrderStatus
    idempotencyKey: string | null
    createdAt: Date
    updatedAt: Date
    expiresAt: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    amountPaise?: boolean
    currency?: boolean
    receipt?: boolean
    status?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
    payments?: boolean | Order$paymentsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    amountPaise?: boolean
    currency?: boolean
    receipt?: boolean
    status?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    amountPaise?: boolean
    currency?: boolean
    receipt?: boolean
    status?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    merchantId?: boolean
    amountPaise?: boolean
    currency?: boolean
    receipt?: boolean
    status?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantId" | "amountPaise" | "currency" | "receipt" | "status" | "idempotencyKey" | "createdAt" | "updatedAt" | "expiresAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
    payments?: boolean | Order$paymentsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      amountPaise: number
      currency: string
      receipt: string | null
      status: $Enums.OrderStatus
      idempotencyKey: string | null
      createdAt: Date
      updatedAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Order$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly merchantId: FieldRef<"Order", 'String'>
    readonly amountPaise: FieldRef<"Order", 'Int'>
    readonly currency: FieldRef<"Order", 'String'>
    readonly receipt: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly idempotencyKey: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly expiresAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.payments
   */
  export type Order$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amountPaise: number | null
    riskScore: number | null
    refundedPaise: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amountPaise: number | null
    riskScore: number | null
    refundedPaise: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    userId: string | null
    method: string | null
    status: $Enums.PaymentStatus | null
    amountPaise: number | null
    riskScore: number | null
    signature: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorizationId: string | null
    capturedAt: Date | null
    failedReason: string | null
    refundedPaise: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    userId: string | null
    method: string | null
    status: $Enums.PaymentStatus | null
    amountPaise: number | null
    riskScore: number | null
    signature: string | null
    createdAt: Date | null
    updatedAt: Date | null
    authorizationId: string | null
    capturedAt: Date | null
    failedReason: string | null
    refundedPaise: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    userId: number
    method: number
    status: number
    amountPaise: number
    riskScore: number
    signature: number
    createdAt: number
    updatedAt: number
    authorizationId: number
    capturedAt: number
    failedReason: number
    refundedPaise: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amountPaise?: true
    riskScore?: true
    refundedPaise?: true
  }

  export type PaymentSumAggregateInputType = {
    amountPaise?: true
    riskScore?: true
    refundedPaise?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    userId?: true
    method?: true
    status?: true
    amountPaise?: true
    riskScore?: true
    signature?: true
    createdAt?: true
    updatedAt?: true
    authorizationId?: true
    capturedAt?: true
    failedReason?: true
    refundedPaise?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    userId?: true
    method?: true
    status?: true
    amountPaise?: true
    riskScore?: true
    signature?: true
    createdAt?: true
    updatedAt?: true
    authorizationId?: true
    capturedAt?: true
    failedReason?: true
    refundedPaise?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    userId?: true
    method?: true
    status?: true
    amountPaise?: true
    riskScore?: true
    signature?: true
    createdAt?: true
    updatedAt?: true
    authorizationId?: true
    capturedAt?: true
    failedReason?: true
    refundedPaise?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    orderId: string
    userId: string
    method: string
    status: $Enums.PaymentStatus
    amountPaise: number
    riskScore: number | null
    signature: string | null
    createdAt: Date
    updatedAt: Date
    authorizationId: string | null
    capturedAt: Date | null
    failedReason: string | null
    refundedPaise: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    userId?: boolean
    method?: boolean
    status?: boolean
    amountPaise?: boolean
    riskScore?: boolean
    signature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorizationId?: boolean
    capturedAt?: boolean
    failedReason?: boolean
    refundedPaise?: boolean
    chargebacks?: boolean | Payment$chargebacksArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    transitions?: boolean | Payment$transitionsArgs<ExtArgs>
    refunds?: boolean | Payment$refundsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    userId?: boolean
    method?: boolean
    status?: boolean
    amountPaise?: boolean
    riskScore?: boolean
    signature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorizationId?: boolean
    capturedAt?: boolean
    failedReason?: boolean
    refundedPaise?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    userId?: boolean
    method?: boolean
    status?: boolean
    amountPaise?: boolean
    riskScore?: boolean
    signature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorizationId?: boolean
    capturedAt?: boolean
    failedReason?: boolean
    refundedPaise?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    userId?: boolean
    method?: boolean
    status?: boolean
    amountPaise?: boolean
    riskScore?: boolean
    signature?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authorizationId?: boolean
    capturedAt?: boolean
    failedReason?: boolean
    refundedPaise?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "userId" | "method" | "status" | "amountPaise" | "riskScore" | "signature" | "createdAt" | "updatedAt" | "authorizationId" | "capturedAt" | "failedReason" | "refundedPaise", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chargebacks?: boolean | Payment$chargebacksArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    transitions?: boolean | Payment$transitionsArgs<ExtArgs>
    refunds?: boolean | Payment$refundsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      chargebacks: Prisma.$ChargebackPayload<ExtArgs>[]
      order: Prisma.$OrderPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      transitions: Prisma.$PaymentStateTransitionPayload<ExtArgs>[]
      refunds: Prisma.$RefundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      userId: string
      method: string
      status: $Enums.PaymentStatus
      amountPaise: number
      riskScore: number | null
      signature: string | null
      createdAt: Date
      updatedAt: Date
      authorizationId: string | null
      capturedAt: Date | null
      failedReason: string | null
      refundedPaise: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chargebacks<T extends Payment$chargebacksArgs<ExtArgs> = {}>(args?: Subset<T, Payment$chargebacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transitions<T extends Payment$transitionsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$transitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refunds<T extends Payment$refundsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$refundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly amountPaise: FieldRef<"Payment", 'Int'>
    readonly riskScore: FieldRef<"Payment", 'Float'>
    readonly signature: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly authorizationId: FieldRef<"Payment", 'String'>
    readonly capturedAt: FieldRef<"Payment", 'DateTime'>
    readonly failedReason: FieldRef<"Payment", 'String'>
    readonly refundedPaise: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.chargebacks
   */
  export type Payment$chargebacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    where?: ChargebackWhereInput
    orderBy?: ChargebackOrderByWithRelationInput | ChargebackOrderByWithRelationInput[]
    cursor?: ChargebackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChargebackScalarFieldEnum | ChargebackScalarFieldEnum[]
  }

  /**
   * Payment.transitions
   */
  export type Payment$transitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    where?: PaymentStateTransitionWhereInput
    orderBy?: PaymentStateTransitionOrderByWithRelationInput | PaymentStateTransitionOrderByWithRelationInput[]
    cursor?: PaymentStateTransitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentStateTransitionScalarFieldEnum | PaymentStateTransitionScalarFieldEnum[]
  }

  /**
   * Payment.refunds
   */
  export type Payment$refundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    cursor?: RefundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model LedgerEntries
   */

  export type AggregateLedgerEntries = {
    _count: LedgerEntriesCountAggregateOutputType | null
    _avg: LedgerEntriesAvgAggregateOutputType | null
    _sum: LedgerEntriesSumAggregateOutputType | null
    _min: LedgerEntriesMinAggregateOutputType | null
    _max: LedgerEntriesMaxAggregateOutputType | null
  }

  export type LedgerEntriesAvgAggregateOutputType = {
    amountPaise: number | null
    balanceAfter: number | null
  }

  export type LedgerEntriesSumAggregateOutputType = {
    amountPaise: number | null
    balanceAfter: number | null
  }

  export type LedgerEntriesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LedgerType | null
    amountPaise: number | null
    referenceType: $Enums.ReferenceType | null
    referenceId: string | null
    balanceAfter: number | null
    createdAt: Date | null
  }

  export type LedgerEntriesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LedgerType | null
    amountPaise: number | null
    referenceType: $Enums.ReferenceType | null
    referenceId: string | null
    balanceAfter: number | null
    createdAt: Date | null
  }

  export type LedgerEntriesCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    amountPaise: number
    referenceType: number
    referenceId: number
    balanceAfter: number
    createdAt: number
    _all: number
  }


  export type LedgerEntriesAvgAggregateInputType = {
    amountPaise?: true
    balanceAfter?: true
  }

  export type LedgerEntriesSumAggregateInputType = {
    amountPaise?: true
    balanceAfter?: true
  }

  export type LedgerEntriesMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amountPaise?: true
    referenceType?: true
    referenceId?: true
    balanceAfter?: true
    createdAt?: true
  }

  export type LedgerEntriesMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amountPaise?: true
    referenceType?: true
    referenceId?: true
    balanceAfter?: true
    createdAt?: true
  }

  export type LedgerEntriesCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    amountPaise?: true
    referenceType?: true
    referenceId?: true
    balanceAfter?: true
    createdAt?: true
    _all?: true
  }

  export type LedgerEntriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntries to aggregate.
     */
    where?: LedgerEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntriesOrderByWithRelationInput | LedgerEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerEntries
    **/
    _count?: true | LedgerEntriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LedgerEntriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LedgerEntriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerEntriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerEntriesMaxAggregateInputType
  }

  export type GetLedgerEntriesAggregateType<T extends LedgerEntriesAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerEntries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerEntries[P]>
      : GetScalarType<T[P], AggregateLedgerEntries[P]>
  }




  export type LedgerEntriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEntriesWhereInput
    orderBy?: LedgerEntriesOrderByWithAggregationInput | LedgerEntriesOrderByWithAggregationInput[]
    by: LedgerEntriesScalarFieldEnum[] | LedgerEntriesScalarFieldEnum
    having?: LedgerEntriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerEntriesCountAggregateInputType | true
    _avg?: LedgerEntriesAvgAggregateInputType
    _sum?: LedgerEntriesSumAggregateInputType
    _min?: LedgerEntriesMinAggregateInputType
    _max?: LedgerEntriesMaxAggregateInputType
  }

  export type LedgerEntriesGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.LedgerType
    amountPaise: number
    referenceType: $Enums.ReferenceType
    referenceId: string
    balanceAfter: number
    createdAt: Date
    _count: LedgerEntriesCountAggregateOutputType | null
    _avg: LedgerEntriesAvgAggregateOutputType | null
    _sum: LedgerEntriesSumAggregateOutputType | null
    _min: LedgerEntriesMinAggregateOutputType | null
    _max: LedgerEntriesMaxAggregateOutputType | null
  }

  type GetLedgerEntriesGroupByPayload<T extends LedgerEntriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerEntriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerEntriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerEntriesGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerEntriesGroupByOutputType[P]>
        }
      >
    >


  export type LedgerEntriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amountPaise?: boolean
    referenceType?: boolean
    referenceId?: boolean
    balanceAfter?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntries"]>

  export type LedgerEntriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amountPaise?: boolean
    referenceType?: boolean
    referenceId?: boolean
    balanceAfter?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntries"]>

  export type LedgerEntriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    amountPaise?: boolean
    referenceType?: boolean
    referenceId?: boolean
    balanceAfter?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledgerEntries"]>

  export type LedgerEntriesSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    amountPaise?: boolean
    referenceType?: boolean
    referenceId?: boolean
    balanceAfter?: boolean
    createdAt?: boolean
  }

  export type LedgerEntriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "amountPaise" | "referenceType" | "referenceId" | "balanceAfter" | "createdAt", ExtArgs["result"]["ledgerEntries"]>
  export type LedgerEntriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LedgerEntriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LedgerEntriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LedgerEntriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerEntries"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.LedgerType
      amountPaise: number
      referenceType: $Enums.ReferenceType
      referenceId: string
      balanceAfter: number
      createdAt: Date
    }, ExtArgs["result"]["ledgerEntries"]>
    composites: {}
  }

  type LedgerEntriesGetPayload<S extends boolean | null | undefined | LedgerEntriesDefaultArgs> = $Result.GetResult<Prisma.$LedgerEntriesPayload, S>

  type LedgerEntriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerEntriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerEntriesCountAggregateInputType | true
    }

  export interface LedgerEntriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerEntries'], meta: { name: 'LedgerEntries' } }
    /**
     * Find zero or one LedgerEntries that matches the filter.
     * @param {LedgerEntriesFindUniqueArgs} args - Arguments to find a LedgerEntries
     * @example
     * // Get one LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerEntriesFindUniqueArgs>(args: SelectSubset<T, LedgerEntriesFindUniqueArgs<ExtArgs>>): Prisma__LedgerEntriesClient<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LedgerEntries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerEntriesFindUniqueOrThrowArgs} args - Arguments to find a LedgerEntries
     * @example
     * // Get one LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerEntriesFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerEntriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerEntriesClient<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntriesFindFirstArgs} args - Arguments to find a LedgerEntries
     * @example
     * // Get one LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerEntriesFindFirstArgs>(args?: SelectSubset<T, LedgerEntriesFindFirstArgs<ExtArgs>>): Prisma__LedgerEntriesClient<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LedgerEntries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntriesFindFirstOrThrowArgs} args - Arguments to find a LedgerEntries
     * @example
     * // Get one LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerEntriesFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerEntriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerEntriesClient<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LedgerEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.findMany()
     * 
     * // Get first 10 LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ledgerEntriesWithIdOnly = await prisma.ledgerEntries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LedgerEntriesFindManyArgs>(args?: SelectSubset<T, LedgerEntriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LedgerEntries.
     * @param {LedgerEntriesCreateArgs} args - Arguments to create a LedgerEntries.
     * @example
     * // Create one LedgerEntries
     * const LedgerEntries = await prisma.ledgerEntries.create({
     *   data: {
     *     // ... data to create a LedgerEntries
     *   }
     * })
     * 
     */
    create<T extends LedgerEntriesCreateArgs>(args: SelectSubset<T, LedgerEntriesCreateArgs<ExtArgs>>): Prisma__LedgerEntriesClient<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LedgerEntries.
     * @param {LedgerEntriesCreateManyArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerEntriesCreateManyArgs>(args?: SelectSubset<T, LedgerEntriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerEntries and returns the data saved in the database.
     * @param {LedgerEntriesCreateManyAndReturnArgs} args - Arguments to create many LedgerEntries.
     * @example
     * // Create many LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerEntries and only return the `id`
     * const ledgerEntriesWithIdOnly = await prisma.ledgerEntries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerEntriesCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerEntriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LedgerEntries.
     * @param {LedgerEntriesDeleteArgs} args - Arguments to delete one LedgerEntries.
     * @example
     * // Delete one LedgerEntries
     * const LedgerEntries = await prisma.ledgerEntries.delete({
     *   where: {
     *     // ... filter to delete one LedgerEntries
     *   }
     * })
     * 
     */
    delete<T extends LedgerEntriesDeleteArgs>(args: SelectSubset<T, LedgerEntriesDeleteArgs<ExtArgs>>): Prisma__LedgerEntriesClient<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LedgerEntries.
     * @param {LedgerEntriesUpdateArgs} args - Arguments to update one LedgerEntries.
     * @example
     * // Update one LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerEntriesUpdateArgs>(args: SelectSubset<T, LedgerEntriesUpdateArgs<ExtArgs>>): Prisma__LedgerEntriesClient<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LedgerEntries.
     * @param {LedgerEntriesDeleteManyArgs} args - Arguments to filter LedgerEntries to delete.
     * @example
     * // Delete a few LedgerEntries
     * const { count } = await prisma.ledgerEntries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerEntriesDeleteManyArgs>(args?: SelectSubset<T, LedgerEntriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerEntriesUpdateManyArgs>(args: SelectSubset<T, LedgerEntriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEntries and returns the data updated in the database.
     * @param {LedgerEntriesUpdateManyAndReturnArgs} args - Arguments to update many LedgerEntries.
     * @example
     * // Update many LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LedgerEntries and only return the `id`
     * const ledgerEntriesWithIdOnly = await prisma.ledgerEntries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LedgerEntriesUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerEntriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LedgerEntries.
     * @param {LedgerEntriesUpsertArgs} args - Arguments to update or create a LedgerEntries.
     * @example
     * // Update or create a LedgerEntries
     * const ledgerEntries = await prisma.ledgerEntries.upsert({
     *   create: {
     *     // ... data to create a LedgerEntries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerEntries we want to update
     *   }
     * })
     */
    upsert<T extends LedgerEntriesUpsertArgs>(args: SelectSubset<T, LedgerEntriesUpsertArgs<ExtArgs>>): Prisma__LedgerEntriesClient<$Result.GetResult<Prisma.$LedgerEntriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntriesCountArgs} args - Arguments to filter LedgerEntries to count.
     * @example
     * // Count the number of LedgerEntries
     * const count = await prisma.ledgerEntries.count({
     *   where: {
     *     // ... the filter for the LedgerEntries we want to count
     *   }
     * })
    **/
    count<T extends LedgerEntriesCountArgs>(
      args?: Subset<T, LedgerEntriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerEntriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerEntriesAggregateArgs>(args: Subset<T, LedgerEntriesAggregateArgs>): Prisma.PrismaPromise<GetLedgerEntriesAggregateType<T>>

    /**
     * Group by LedgerEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEntriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerEntriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerEntriesGroupByArgs['orderBy'] }
        : { orderBy?: LedgerEntriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerEntriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerEntriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerEntries model
   */
  readonly fields: LedgerEntriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerEntries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerEntriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LedgerEntries model
   */
  interface LedgerEntriesFieldRefs {
    readonly id: FieldRef<"LedgerEntries", 'String'>
    readonly userId: FieldRef<"LedgerEntries", 'String'>
    readonly type: FieldRef<"LedgerEntries", 'LedgerType'>
    readonly amountPaise: FieldRef<"LedgerEntries", 'Int'>
    readonly referenceType: FieldRef<"LedgerEntries", 'ReferenceType'>
    readonly referenceId: FieldRef<"LedgerEntries", 'String'>
    readonly balanceAfter: FieldRef<"LedgerEntries", 'Int'>
    readonly createdAt: FieldRef<"LedgerEntries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LedgerEntries findUnique
   */
  export type LedgerEntriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where: LedgerEntriesWhereUniqueInput
  }

  /**
   * LedgerEntries findUniqueOrThrow
   */
  export type LedgerEntriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where: LedgerEntriesWhereUniqueInput
  }

  /**
   * LedgerEntries findFirst
   */
  export type LedgerEntriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where?: LedgerEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntriesOrderByWithRelationInput | LedgerEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntriesScalarFieldEnum | LedgerEntriesScalarFieldEnum[]
  }

  /**
   * LedgerEntries findFirstOrThrow
   */
  export type LedgerEntriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where?: LedgerEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntriesOrderByWithRelationInput | LedgerEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEntries.
     */
    cursor?: LedgerEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEntries.
     */
    distinct?: LedgerEntriesScalarFieldEnum | LedgerEntriesScalarFieldEnum[]
  }

  /**
   * LedgerEntries findMany
   */
  export type LedgerEntriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * Filter, which LedgerEntries to fetch.
     */
    where?: LedgerEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEntries to fetch.
     */
    orderBy?: LedgerEntriesOrderByWithRelationInput | LedgerEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerEntries.
     */
    cursor?: LedgerEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEntries.
     */
    skip?: number
    distinct?: LedgerEntriesScalarFieldEnum | LedgerEntriesScalarFieldEnum[]
  }

  /**
   * LedgerEntries create
   */
  export type LedgerEntriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * The data needed to create a LedgerEntries.
     */
    data: XOR<LedgerEntriesCreateInput, LedgerEntriesUncheckedCreateInput>
  }

  /**
   * LedgerEntries createMany
   */
  export type LedgerEntriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntriesCreateManyInput | LedgerEntriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LedgerEntries createManyAndReturn
   */
  export type LedgerEntriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * The data used to create many LedgerEntries.
     */
    data: LedgerEntriesCreateManyInput | LedgerEntriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerEntries update
   */
  export type LedgerEntriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * The data needed to update a LedgerEntries.
     */
    data: XOR<LedgerEntriesUpdateInput, LedgerEntriesUncheckedUpdateInput>
    /**
     * Choose, which LedgerEntries to update.
     */
    where: LedgerEntriesWhereUniqueInput
  }

  /**
   * LedgerEntries updateMany
   */
  export type LedgerEntriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<LedgerEntriesUpdateManyMutationInput, LedgerEntriesUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntriesWhereInput
    /**
     * Limit how many LedgerEntries to update.
     */
    limit?: number
  }

  /**
   * LedgerEntries updateManyAndReturn
   */
  export type LedgerEntriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * The data used to update LedgerEntries.
     */
    data: XOR<LedgerEntriesUpdateManyMutationInput, LedgerEntriesUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEntries to update
     */
    where?: LedgerEntriesWhereInput
    /**
     * Limit how many LedgerEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LedgerEntries upsert
   */
  export type LedgerEntriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * The filter to search for the LedgerEntries to update in case it exists.
     */
    where: LedgerEntriesWhereUniqueInput
    /**
     * In case the LedgerEntries found by the `where` argument doesn't exist, create a new LedgerEntries with this data.
     */
    create: XOR<LedgerEntriesCreateInput, LedgerEntriesUncheckedCreateInput>
    /**
     * In case the LedgerEntries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerEntriesUpdateInput, LedgerEntriesUncheckedUpdateInput>
  }

  /**
   * LedgerEntries delete
   */
  export type LedgerEntriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
    /**
     * Filter which LedgerEntries to delete.
     */
    where: LedgerEntriesWhereUniqueInput
  }

  /**
   * LedgerEntries deleteMany
   */
  export type LedgerEntriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEntries to delete
     */
    where?: LedgerEntriesWhereInput
    /**
     * Limit how many LedgerEntries to delete.
     */
    limit?: number
  }

  /**
   * LedgerEntries without action
   */
  export type LedgerEntriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEntries
     */
    select?: LedgerEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LedgerEntries
     */
    omit?: LedgerEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerEntriesInclude<ExtArgs> | null
  }


  /**
   * Model WebhookDelivery
   */

  export type AggregateWebhookDelivery = {
    _count: WebhookDeliveryCountAggregateOutputType | null
    _avg: WebhookDeliveryAvgAggregateOutputType | null
    _sum: WebhookDeliverySumAggregateOutputType | null
    _min: WebhookDeliveryMinAggregateOutputType | null
    _max: WebhookDeliveryMaxAggregateOutputType | null
  }

  export type WebhookDeliveryAvgAggregateOutputType = {
    attempts: number | null
  }

  export type WebhookDeliverySumAggregateOutputType = {
    attempts: number | null
  }

  export type WebhookDeliveryMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    eventId: string | null
    event: string | null
    payload: string | null
    status: string | null
    attempts: number | null
    url: string | null
    signature: string | null
    timestamp: string | null
    nextRetryAt: Date | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookDeliveryMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    eventId: string | null
    event: string | null
    payload: string | null
    status: string | null
    attempts: number | null
    url: string | null
    signature: string | null
    timestamp: string | null
    nextRetryAt: Date | null
    lastError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookDeliveryCountAggregateOutputType = {
    id: number
    merchantId: number
    eventId: number
    event: number
    payload: number
    status: number
    attempts: number
    url: number
    signature: number
    timestamp: number
    nextRetryAt: number
    lastError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebhookDeliveryAvgAggregateInputType = {
    attempts?: true
  }

  export type WebhookDeliverySumAggregateInputType = {
    attempts?: true
  }

  export type WebhookDeliveryMinAggregateInputType = {
    id?: true
    merchantId?: true
    eventId?: true
    event?: true
    payload?: true
    status?: true
    attempts?: true
    url?: true
    signature?: true
    timestamp?: true
    nextRetryAt?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookDeliveryMaxAggregateInputType = {
    id?: true
    merchantId?: true
    eventId?: true
    event?: true
    payload?: true
    status?: true
    attempts?: true
    url?: true
    signature?: true
    timestamp?: true
    nextRetryAt?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookDeliveryCountAggregateInputType = {
    id?: true
    merchantId?: true
    eventId?: true
    event?: true
    payload?: true
    status?: true
    attempts?: true
    url?: true
    signature?: true
    timestamp?: true
    nextRetryAt?: true
    lastError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebhookDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookDelivery to aggregate.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookDeliveries
    **/
    _count?: true | WebhookDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookDeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookDeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookDeliveryMaxAggregateInputType
  }

  export type GetWebhookDeliveryAggregateType<T extends WebhookDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookDelivery[P]>
      : GetScalarType<T[P], AggregateWebhookDelivery[P]>
  }




  export type WebhookDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookDeliveryWhereInput
    orderBy?: WebhookDeliveryOrderByWithAggregationInput | WebhookDeliveryOrderByWithAggregationInput[]
    by: WebhookDeliveryScalarFieldEnum[] | WebhookDeliveryScalarFieldEnum
    having?: WebhookDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookDeliveryCountAggregateInputType | true
    _avg?: WebhookDeliveryAvgAggregateInputType
    _sum?: WebhookDeliverySumAggregateInputType
    _min?: WebhookDeliveryMinAggregateInputType
    _max?: WebhookDeliveryMaxAggregateInputType
  }

  export type WebhookDeliveryGroupByOutputType = {
    id: string
    merchantId: string
    eventId: string
    event: string
    payload: string
    status: string
    attempts: number
    url: string
    signature: string
    timestamp: string
    nextRetryAt: Date | null
    lastError: string | null
    createdAt: Date
    updatedAt: Date
    _count: WebhookDeliveryCountAggregateOutputType | null
    _avg: WebhookDeliveryAvgAggregateOutputType | null
    _sum: WebhookDeliverySumAggregateOutputType | null
    _min: WebhookDeliveryMinAggregateOutputType | null
    _max: WebhookDeliveryMaxAggregateOutputType | null
  }

  type GetWebhookDeliveryGroupByPayload<T extends WebhookDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type WebhookDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    eventId?: boolean
    event?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    url?: boolean
    signature?: boolean
    timestamp?: boolean
    nextRetryAt?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    eventId?: boolean
    event?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    url?: boolean
    signature?: boolean
    timestamp?: boolean
    nextRetryAt?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    eventId?: boolean
    event?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    url?: boolean
    signature?: boolean
    timestamp?: boolean
    nextRetryAt?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["webhookDelivery"]>

  export type WebhookDeliverySelectScalar = {
    id?: boolean
    merchantId?: boolean
    eventId?: boolean
    event?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    url?: boolean
    signature?: boolean
    timestamp?: boolean
    nextRetryAt?: boolean
    lastError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebhookDeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantId" | "eventId" | "event" | "payload" | "status" | "attempts" | "url" | "signature" | "timestamp" | "nextRetryAt" | "lastError" | "createdAt" | "updatedAt", ExtArgs["result"]["webhookDelivery"]>

  export type $WebhookDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookDelivery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      eventId: string
      event: string
      payload: string
      status: string
      attempts: number
      url: string
      signature: string
      timestamp: string
      nextRetryAt: Date | null
      lastError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webhookDelivery"]>
    composites: {}
  }

  type WebhookDeliveryGetPayload<S extends boolean | null | undefined | WebhookDeliveryDefaultArgs> = $Result.GetResult<Prisma.$WebhookDeliveryPayload, S>

  type WebhookDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookDeliveryCountAggregateInputType | true
    }

  export interface WebhookDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookDelivery'], meta: { name: 'WebhookDelivery' } }
    /**
     * Find zero or one WebhookDelivery that matches the filter.
     * @param {WebhookDeliveryFindUniqueArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookDeliveryFindUniqueArgs>(args: SelectSubset<T, WebhookDeliveryFindUniqueArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebhookDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookDeliveryFindUniqueOrThrowArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindFirstArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookDeliveryFindFirstArgs>(args?: SelectSubset<T, WebhookDeliveryFindFirstArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebhookDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindFirstOrThrowArgs} args - Arguments to find a WebhookDelivery
     * @example
     * // Get one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebhookDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookDeliveries
     * const webhookDeliveries = await prisma.webhookDelivery.findMany()
     * 
     * // Get first 10 WebhookDeliveries
     * const webhookDeliveries = await prisma.webhookDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookDeliveryFindManyArgs>(args?: SelectSubset<T, WebhookDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebhookDelivery.
     * @param {WebhookDeliveryCreateArgs} args - Arguments to create a WebhookDelivery.
     * @example
     * // Create one WebhookDelivery
     * const WebhookDelivery = await prisma.webhookDelivery.create({
     *   data: {
     *     // ... data to create a WebhookDelivery
     *   }
     * })
     * 
     */
    create<T extends WebhookDeliveryCreateArgs>(args: SelectSubset<T, WebhookDeliveryCreateArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebhookDeliveries.
     * @param {WebhookDeliveryCreateManyArgs} args - Arguments to create many WebhookDeliveries.
     * @example
     * // Create many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookDeliveryCreateManyArgs>(args?: SelectSubset<T, WebhookDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookDeliveries and returns the data saved in the database.
     * @param {WebhookDeliveryCreateManyAndReturnArgs} args - Arguments to create many WebhookDeliveries.
     * @example
     * // Create many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookDeliveries and only return the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebhookDelivery.
     * @param {WebhookDeliveryDeleteArgs} args - Arguments to delete one WebhookDelivery.
     * @example
     * // Delete one WebhookDelivery
     * const WebhookDelivery = await prisma.webhookDelivery.delete({
     *   where: {
     *     // ... filter to delete one WebhookDelivery
     *   }
     * })
     * 
     */
    delete<T extends WebhookDeliveryDeleteArgs>(args: SelectSubset<T, WebhookDeliveryDeleteArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebhookDelivery.
     * @param {WebhookDeliveryUpdateArgs} args - Arguments to update one WebhookDelivery.
     * @example
     * // Update one WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookDeliveryUpdateArgs>(args: SelectSubset<T, WebhookDeliveryUpdateArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebhookDeliveries.
     * @param {WebhookDeliveryDeleteManyArgs} args - Arguments to filter WebhookDeliveries to delete.
     * @example
     * // Delete a few WebhookDeliveries
     * const { count } = await prisma.webhookDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookDeliveryDeleteManyArgs>(args?: SelectSubset<T, WebhookDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookDeliveryUpdateManyArgs>(args: SelectSubset<T, WebhookDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookDeliveries and returns the data updated in the database.
     * @param {WebhookDeliveryUpdateManyAndReturnArgs} args - Arguments to update many WebhookDeliveries.
     * @example
     * // Update many WebhookDeliveries
     * const webhookDelivery = await prisma.webhookDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookDeliveries and only return the `id`
     * const webhookDeliveryWithIdOnly = await prisma.webhookDelivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookDeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebhookDelivery.
     * @param {WebhookDeliveryUpsertArgs} args - Arguments to update or create a WebhookDelivery.
     * @example
     * // Update or create a WebhookDelivery
     * const webhookDelivery = await prisma.webhookDelivery.upsert({
     *   create: {
     *     // ... data to create a WebhookDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookDelivery we want to update
     *   }
     * })
     */
    upsert<T extends WebhookDeliveryUpsertArgs>(args: SelectSubset<T, WebhookDeliveryUpsertArgs<ExtArgs>>): Prisma__WebhookDeliveryClient<$Result.GetResult<Prisma.$WebhookDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebhookDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryCountArgs} args - Arguments to filter WebhookDeliveries to count.
     * @example
     * // Count the number of WebhookDeliveries
     * const count = await prisma.webhookDelivery.count({
     *   where: {
     *     // ... the filter for the WebhookDeliveries we want to count
     *   }
     * })
    **/
    count<T extends WebhookDeliveryCountArgs>(
      args?: Subset<T, WebhookDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookDeliveryAggregateArgs>(args: Subset<T, WebhookDeliveryAggregateArgs>): Prisma.PrismaPromise<GetWebhookDeliveryAggregateType<T>>

    /**
     * Group by WebhookDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookDeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: WebhookDeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookDelivery model
   */
  readonly fields: WebhookDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookDelivery model
   */
  interface WebhookDeliveryFieldRefs {
    readonly id: FieldRef<"WebhookDelivery", 'String'>
    readonly merchantId: FieldRef<"WebhookDelivery", 'String'>
    readonly eventId: FieldRef<"WebhookDelivery", 'String'>
    readonly event: FieldRef<"WebhookDelivery", 'String'>
    readonly payload: FieldRef<"WebhookDelivery", 'String'>
    readonly status: FieldRef<"WebhookDelivery", 'String'>
    readonly attempts: FieldRef<"WebhookDelivery", 'Int'>
    readonly url: FieldRef<"WebhookDelivery", 'String'>
    readonly signature: FieldRef<"WebhookDelivery", 'String'>
    readonly timestamp: FieldRef<"WebhookDelivery", 'String'>
    readonly nextRetryAt: FieldRef<"WebhookDelivery", 'DateTime'>
    readonly lastError: FieldRef<"WebhookDelivery", 'String'>
    readonly createdAt: FieldRef<"WebhookDelivery", 'DateTime'>
    readonly updatedAt: FieldRef<"WebhookDelivery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookDelivery findUnique
   */
  export type WebhookDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery findUniqueOrThrow
   */
  export type WebhookDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery findFirst
   */
  export type WebhookDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery findFirstOrThrow
   */
  export type WebhookDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Filter, which WebhookDelivery to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookDeliveries.
     */
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery findMany
   */
  export type WebhookDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Filter, which WebhookDeliveries to fetch.
     */
    where?: WebhookDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookDeliveries to fetch.
     */
    orderBy?: WebhookDeliveryOrderByWithRelationInput | WebhookDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookDeliveries.
     */
    cursor?: WebhookDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookDeliveries.
     */
    skip?: number
    distinct?: WebhookDeliveryScalarFieldEnum | WebhookDeliveryScalarFieldEnum[]
  }

  /**
   * WebhookDelivery create
   */
  export type WebhookDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The data needed to create a WebhookDelivery.
     */
    data: XOR<WebhookDeliveryCreateInput, WebhookDeliveryUncheckedCreateInput>
  }

  /**
   * WebhookDelivery createMany
   */
  export type WebhookDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookDeliveries.
     */
    data: WebhookDeliveryCreateManyInput | WebhookDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookDelivery createManyAndReturn
   */
  export type WebhookDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookDeliveries.
     */
    data: WebhookDeliveryCreateManyInput | WebhookDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookDelivery update
   */
  export type WebhookDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The data needed to update a WebhookDelivery.
     */
    data: XOR<WebhookDeliveryUpdateInput, WebhookDeliveryUncheckedUpdateInput>
    /**
     * Choose, which WebhookDelivery to update.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery updateMany
   */
  export type WebhookDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookDeliveries.
     */
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookDeliveries to update
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to update.
     */
    limit?: number
  }

  /**
   * WebhookDelivery updateManyAndReturn
   */
  export type WebhookDeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The data used to update WebhookDeliveries.
     */
    data: XOR<WebhookDeliveryUpdateManyMutationInput, WebhookDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which WebhookDeliveries to update
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to update.
     */
    limit?: number
  }

  /**
   * WebhookDelivery upsert
   */
  export type WebhookDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * The filter to search for the WebhookDelivery to update in case it exists.
     */
    where: WebhookDeliveryWhereUniqueInput
    /**
     * In case the WebhookDelivery found by the `where` argument doesn't exist, create a new WebhookDelivery with this data.
     */
    create: XOR<WebhookDeliveryCreateInput, WebhookDeliveryUncheckedCreateInput>
    /**
     * In case the WebhookDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookDeliveryUpdateInput, WebhookDeliveryUncheckedUpdateInput>
  }

  /**
   * WebhookDelivery delete
   */
  export type WebhookDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
    /**
     * Filter which WebhookDelivery to delete.
     */
    where: WebhookDeliveryWhereUniqueInput
  }

  /**
   * WebhookDelivery deleteMany
   */
  export type WebhookDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookDeliveries to delete
     */
    where?: WebhookDeliveryWhereInput
    /**
     * Limit how many WebhookDeliveries to delete.
     */
    limit?: number
  }

  /**
   * WebhookDelivery without action
   */
  export type WebhookDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookDelivery
     */
    select?: WebhookDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookDelivery
     */
    omit?: WebhookDeliveryOmit<ExtArgs> | null
  }


  /**
   * Model IdempotencyKey
   */

  export type AggregateIdempotencyKey = {
    _count: IdempotencyKeyCountAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  export type IdempotencyKeyMinAggregateOutputType = {
    id: string | null
    merchantId: string | null
    key: string | null
    requestHash: string | null
    responseBody: string | null
    status: string | null
    createdAt: Date | null
  }

  export type IdempotencyKeyMaxAggregateOutputType = {
    id: string | null
    merchantId: string | null
    key: string | null
    requestHash: string | null
    responseBody: string | null
    status: string | null
    createdAt: Date | null
  }

  export type IdempotencyKeyCountAggregateOutputType = {
    id: number
    merchantId: number
    key: number
    requestHash: number
    responseBody: number
    status: number
    createdAt: number
    _all: number
  }


  export type IdempotencyKeyMinAggregateInputType = {
    id?: true
    merchantId?: true
    key?: true
    requestHash?: true
    responseBody?: true
    status?: true
    createdAt?: true
  }

  export type IdempotencyKeyMaxAggregateInputType = {
    id?: true
    merchantId?: true
    key?: true
    requestHash?: true
    responseBody?: true
    status?: true
    createdAt?: true
  }

  export type IdempotencyKeyCountAggregateInputType = {
    id?: true
    merchantId?: true
    key?: true
    requestHash?: true
    responseBody?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type IdempotencyKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKey to aggregate.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdempotencyKeys
    **/
    _count?: true | IdempotencyKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdempotencyKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type GetIdempotencyKeyAggregateType<T extends IdempotencyKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateIdempotencyKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdempotencyKey[P]>
      : GetScalarType<T[P], AggregateIdempotencyKey[P]>
  }




  export type IdempotencyKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdempotencyKeyWhereInput
    orderBy?: IdempotencyKeyOrderByWithAggregationInput | IdempotencyKeyOrderByWithAggregationInput[]
    by: IdempotencyKeyScalarFieldEnum[] | IdempotencyKeyScalarFieldEnum
    having?: IdempotencyKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdempotencyKeyCountAggregateInputType | true
    _min?: IdempotencyKeyMinAggregateInputType
    _max?: IdempotencyKeyMaxAggregateInputType
  }

  export type IdempotencyKeyGroupByOutputType = {
    id: string
    merchantId: string
    key: string
    requestHash: string | null
    responseBody: string | null
    status: string
    createdAt: Date
    _count: IdempotencyKeyCountAggregateOutputType | null
    _min: IdempotencyKeyMinAggregateOutputType | null
    _max: IdempotencyKeyMaxAggregateOutputType | null
  }

  type GetIdempotencyKeyGroupByPayload<T extends IdempotencyKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdempotencyKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdempotencyKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
            : GetScalarType<T[P], IdempotencyKeyGroupByOutputType[P]>
        }
      >
    >


  export type IdempotencyKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    key?: boolean
    requestHash?: boolean
    responseBody?: boolean
    status?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    key?: boolean
    requestHash?: boolean
    responseBody?: boolean
    status?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    merchantId?: boolean
    key?: boolean
    requestHash?: boolean
    responseBody?: boolean
    status?: boolean
    createdAt?: boolean
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["idempotencyKey"]>

  export type IdempotencyKeySelectScalar = {
    id?: boolean
    merchantId?: boolean
    key?: boolean
    requestHash?: boolean
    responseBody?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type IdempotencyKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "merchantId" | "key" | "requestHash" | "responseBody" | "status" | "createdAt", ExtArgs["result"]["idempotencyKey"]>
  export type IdempotencyKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type IdempotencyKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }
  export type IdempotencyKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    merchant?: boolean | MerchantDefaultArgs<ExtArgs>
  }

  export type $IdempotencyKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdempotencyKey"
    objects: {
      merchant: Prisma.$MerchantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      merchantId: string
      key: string
      requestHash: string | null
      responseBody: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["idempotencyKey"]>
    composites: {}
  }

  type IdempotencyKeyGetPayload<S extends boolean | null | undefined | IdempotencyKeyDefaultArgs> = $Result.GetResult<Prisma.$IdempotencyKeyPayload, S>

  type IdempotencyKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdempotencyKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdempotencyKeyCountAggregateInputType | true
    }

  export interface IdempotencyKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdempotencyKey'], meta: { name: 'IdempotencyKey' } }
    /**
     * Find zero or one IdempotencyKey that matches the filter.
     * @param {IdempotencyKeyFindUniqueArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdempotencyKeyFindUniqueArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdempotencyKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdempotencyKeyFindUniqueOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdempotencyKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdempotencyKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdempotencyKeyFindFirstArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdempotencyKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindFirstOrThrowArgs} args - Arguments to find a IdempotencyKey
     * @example
     * // Get one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdempotencyKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, IdempotencyKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdempotencyKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany()
     * 
     * // Get first 10 IdempotencyKeys
     * const idempotencyKeys = await prisma.idempotencyKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdempotencyKeyFindManyArgs>(args?: SelectSubset<T, IdempotencyKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdempotencyKey.
     * @param {IdempotencyKeyCreateArgs} args - Arguments to create a IdempotencyKey.
     * @example
     * // Create one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.create({
     *   data: {
     *     // ... data to create a IdempotencyKey
     *   }
     * })
     * 
     */
    create<T extends IdempotencyKeyCreateArgs>(args: SelectSubset<T, IdempotencyKeyCreateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdempotencyKeys.
     * @param {IdempotencyKeyCreateManyArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdempotencyKeyCreateManyArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdempotencyKeys and returns the data saved in the database.
     * @param {IdempotencyKeyCreateManyAndReturnArgs} args - Arguments to create many IdempotencyKeys.
     * @example
     * // Create many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdempotencyKeys and only return the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdempotencyKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, IdempotencyKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdempotencyKey.
     * @param {IdempotencyKeyDeleteArgs} args - Arguments to delete one IdempotencyKey.
     * @example
     * // Delete one IdempotencyKey
     * const IdempotencyKey = await prisma.idempotencyKey.delete({
     *   where: {
     *     // ... filter to delete one IdempotencyKey
     *   }
     * })
     * 
     */
    delete<T extends IdempotencyKeyDeleteArgs>(args: SelectSubset<T, IdempotencyKeyDeleteArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdempotencyKey.
     * @param {IdempotencyKeyUpdateArgs} args - Arguments to update one IdempotencyKey.
     * @example
     * // Update one IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdempotencyKeyUpdateArgs>(args: SelectSubset<T, IdempotencyKeyUpdateArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdempotencyKeys.
     * @param {IdempotencyKeyDeleteManyArgs} args - Arguments to filter IdempotencyKeys to delete.
     * @example
     * // Delete a few IdempotencyKeys
     * const { count } = await prisma.idempotencyKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdempotencyKeyDeleteManyArgs>(args?: SelectSubset<T, IdempotencyKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdempotencyKeyUpdateManyArgs>(args: SelectSubset<T, IdempotencyKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdempotencyKeys and returns the data updated in the database.
     * @param {IdempotencyKeyUpdateManyAndReturnArgs} args - Arguments to update many IdempotencyKeys.
     * @example
     * // Update many IdempotencyKeys
     * const idempotencyKey = await prisma.idempotencyKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdempotencyKeys and only return the `id`
     * const idempotencyKeyWithIdOnly = await prisma.idempotencyKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdempotencyKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdempotencyKey.
     * @param {IdempotencyKeyUpsertArgs} args - Arguments to update or create a IdempotencyKey.
     * @example
     * // Update or create a IdempotencyKey
     * const idempotencyKey = await prisma.idempotencyKey.upsert({
     *   create: {
     *     // ... data to create a IdempotencyKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdempotencyKey we want to update
     *   }
     * })
     */
    upsert<T extends IdempotencyKeyUpsertArgs>(args: SelectSubset<T, IdempotencyKeyUpsertArgs<ExtArgs>>): Prisma__IdempotencyKeyClient<$Result.GetResult<Prisma.$IdempotencyKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdempotencyKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyCountArgs} args - Arguments to filter IdempotencyKeys to count.
     * @example
     * // Count the number of IdempotencyKeys
     * const count = await prisma.idempotencyKey.count({
     *   where: {
     *     // ... the filter for the IdempotencyKeys we want to count
     *   }
     * })
    **/
    count<T extends IdempotencyKeyCountArgs>(
      args?: Subset<T, IdempotencyKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdempotencyKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdempotencyKeyAggregateArgs>(args: Subset<T, IdempotencyKeyAggregateArgs>): Prisma.PrismaPromise<GetIdempotencyKeyAggregateType<T>>

    /**
     * Group by IdempotencyKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdempotencyKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdempotencyKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdempotencyKeyGroupByArgs['orderBy'] }
        : { orderBy?: IdempotencyKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdempotencyKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdempotencyKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdempotencyKey model
   */
  readonly fields: IdempotencyKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdempotencyKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdempotencyKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    merchant<T extends MerchantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MerchantDefaultArgs<ExtArgs>>): Prisma__MerchantClient<$Result.GetResult<Prisma.$MerchantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IdempotencyKey model
   */
  interface IdempotencyKeyFieldRefs {
    readonly id: FieldRef<"IdempotencyKey", 'String'>
    readonly merchantId: FieldRef<"IdempotencyKey", 'String'>
    readonly key: FieldRef<"IdempotencyKey", 'String'>
    readonly requestHash: FieldRef<"IdempotencyKey", 'String'>
    readonly responseBody: FieldRef<"IdempotencyKey", 'String'>
    readonly status: FieldRef<"IdempotencyKey", 'String'>
    readonly createdAt: FieldRef<"IdempotencyKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdempotencyKey findUnique
   */
  export type IdempotencyKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findUniqueOrThrow
   */
  export type IdempotencyKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey findFirst
   */
  export type IdempotencyKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findFirstOrThrow
   */
  export type IdempotencyKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * Filter, which IdempotencyKey to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdempotencyKeys.
     */
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey findMany
   */
  export type IdempotencyKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * Filter, which IdempotencyKeys to fetch.
     */
    where?: IdempotencyKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdempotencyKeys to fetch.
     */
    orderBy?: IdempotencyKeyOrderByWithRelationInput | IdempotencyKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdempotencyKeys.
     */
    cursor?: IdempotencyKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdempotencyKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdempotencyKeys.
     */
    skip?: number
    distinct?: IdempotencyKeyScalarFieldEnum | IdempotencyKeyScalarFieldEnum[]
  }

  /**
   * IdempotencyKey create
   */
  export type IdempotencyKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
  }

  /**
   * IdempotencyKey createMany
   */
  export type IdempotencyKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdempotencyKey createManyAndReturn
   */
  export type IdempotencyKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The data used to create many IdempotencyKeys.
     */
    data: IdempotencyKeyCreateManyInput | IdempotencyKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdempotencyKey update
   */
  export type IdempotencyKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a IdempotencyKey.
     */
    data: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
    /**
     * Choose, which IdempotencyKey to update.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey updateMany
   */
  export type IdempotencyKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdempotencyKeys.
     */
    data: XOR<IdempotencyKeyUpdateManyMutationInput, IdempotencyKeyUncheckedUpdateManyInput>
    /**
     * Filter which IdempotencyKeys to update
     */
    where?: IdempotencyKeyWhereInput
    /**
     * Limit how many IdempotencyKeys to update.
     */
    limit?: number
  }

  /**
   * IdempotencyKey updateManyAndReturn
   */
  export type IdempotencyKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * The data used to update IdempotencyKeys.
     */
    data: XOR<IdempotencyKeyUpdateManyMutationInput, IdempotencyKeyUncheckedUpdateManyInput>
    /**
     * Filter which IdempotencyKeys to update
     */
    where?: IdempotencyKeyWhereInput
    /**
     * Limit how many IdempotencyKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdempotencyKey upsert
   */
  export type IdempotencyKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the IdempotencyKey to update in case it exists.
     */
    where: IdempotencyKeyWhereUniqueInput
    /**
     * In case the IdempotencyKey found by the `where` argument doesn't exist, create a new IdempotencyKey with this data.
     */
    create: XOR<IdempotencyKeyCreateInput, IdempotencyKeyUncheckedCreateInput>
    /**
     * In case the IdempotencyKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdempotencyKeyUpdateInput, IdempotencyKeyUncheckedUpdateInput>
  }

  /**
   * IdempotencyKey delete
   */
  export type IdempotencyKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
    /**
     * Filter which IdempotencyKey to delete.
     */
    where: IdempotencyKeyWhereUniqueInput
  }

  /**
   * IdempotencyKey deleteMany
   */
  export type IdempotencyKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdempotencyKeys to delete
     */
    where?: IdempotencyKeyWhereInput
    /**
     * Limit how many IdempotencyKeys to delete.
     */
    limit?: number
  }

  /**
   * IdempotencyKey without action
   */
  export type IdempotencyKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdempotencyKey
     */
    select?: IdempotencyKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdempotencyKey
     */
    omit?: IdempotencyKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdempotencyKeyInclude<ExtArgs> | null
  }


  /**
   * Model Refund
   */

  export type AggregateRefund = {
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  export type RefundAvgAggregateOutputType = {
    amountPaise: number | null
  }

  export type RefundSumAggregateOutputType = {
    amountPaise: number | null
  }

  export type RefundMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    amountPaise: number | null
    status: string | null
    reason: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type RefundMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    amountPaise: number | null
    status: string | null
    reason: string | null
    createdAt: Date | null
    processedAt: Date | null
  }

  export type RefundCountAggregateOutputType = {
    id: number
    paymentId: number
    amountPaise: number
    status: number
    reason: number
    createdAt: number
    processedAt: number
    _all: number
  }


  export type RefundAvgAggregateInputType = {
    amountPaise?: true
  }

  export type RefundSumAggregateInputType = {
    amountPaise?: true
  }

  export type RefundMinAggregateInputType = {
    id?: true
    paymentId?: true
    amountPaise?: true
    status?: true
    reason?: true
    createdAt?: true
    processedAt?: true
  }

  export type RefundMaxAggregateInputType = {
    id?: true
    paymentId?: true
    amountPaise?: true
    status?: true
    reason?: true
    createdAt?: true
    processedAt?: true
  }

  export type RefundCountAggregateInputType = {
    id?: true
    paymentId?: true
    amountPaise?: true
    status?: true
    reason?: true
    createdAt?: true
    processedAt?: true
    _all?: true
  }

  export type RefundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refund to aggregate.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refunds
    **/
    _count?: true | RefundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefundMaxAggregateInputType
  }

  export type GetRefundAggregateType<T extends RefundAggregateArgs> = {
        [P in keyof T & keyof AggregateRefund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefund[P]>
      : GetScalarType<T[P], AggregateRefund[P]>
  }




  export type RefundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefundWhereInput
    orderBy?: RefundOrderByWithAggregationInput | RefundOrderByWithAggregationInput[]
    by: RefundScalarFieldEnum[] | RefundScalarFieldEnum
    having?: RefundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefundCountAggregateInputType | true
    _avg?: RefundAvgAggregateInputType
    _sum?: RefundSumAggregateInputType
    _min?: RefundMinAggregateInputType
    _max?: RefundMaxAggregateInputType
  }

  export type RefundGroupByOutputType = {
    id: string
    paymentId: string
    amountPaise: number
    status: string
    reason: string | null
    createdAt: Date
    processedAt: Date | null
    _count: RefundCountAggregateOutputType | null
    _avg: RefundAvgAggregateOutputType | null
    _sum: RefundSumAggregateOutputType | null
    _min: RefundMinAggregateOutputType | null
    _max: RefundMaxAggregateOutputType | null
  }

  type GetRefundGroupByPayload<T extends RefundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefundGroupByOutputType[P]>
            : GetScalarType<T[P], RefundGroupByOutputType[P]>
        }
      >
    >


  export type RefundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amountPaise?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    processedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amountPaise?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    processedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amountPaise?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    processedAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refund"]>

  export type RefundSelectScalar = {
    id?: boolean
    paymentId?: boolean
    amountPaise?: boolean
    status?: boolean
    reason?: boolean
    createdAt?: boolean
    processedAt?: boolean
  }

  export type RefundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "amountPaise" | "status" | "reason" | "createdAt" | "processedAt", ExtArgs["result"]["refund"]>
  export type RefundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type RefundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type RefundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $RefundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Refund"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      amountPaise: number
      status: string
      reason: string | null
      createdAt: Date
      processedAt: Date | null
    }, ExtArgs["result"]["refund"]>
    composites: {}
  }

  type RefundGetPayload<S extends boolean | null | undefined | RefundDefaultArgs> = $Result.GetResult<Prisma.$RefundPayload, S>

  type RefundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefundCountAggregateInputType | true
    }

  export interface RefundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refund'], meta: { name: 'Refund' } }
    /**
     * Find zero or one Refund that matches the filter.
     * @param {RefundFindUniqueArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefundFindUniqueArgs>(args: SelectSubset<T, RefundFindUniqueArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Refund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefundFindUniqueOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefundFindUniqueOrThrowArgs>(args: SelectSubset<T, RefundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefundFindFirstArgs>(args?: SelectSubset<T, RefundFindFirstArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Refund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindFirstOrThrowArgs} args - Arguments to find a Refund
     * @example
     * // Get one Refund
     * const refund = await prisma.refund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefundFindFirstOrThrowArgs>(args?: SelectSubset<T, RefundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Refunds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refunds
     * const refunds = await prisma.refund.findMany()
     * 
     * // Get first 10 Refunds
     * const refunds = await prisma.refund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refundWithIdOnly = await prisma.refund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefundFindManyArgs>(args?: SelectSubset<T, RefundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Refund.
     * @param {RefundCreateArgs} args - Arguments to create a Refund.
     * @example
     * // Create one Refund
     * const Refund = await prisma.refund.create({
     *   data: {
     *     // ... data to create a Refund
     *   }
     * })
     * 
     */
    create<T extends RefundCreateArgs>(args: SelectSubset<T, RefundCreateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Refunds.
     * @param {RefundCreateManyArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefundCreateManyArgs>(args?: SelectSubset<T, RefundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Refunds and returns the data saved in the database.
     * @param {RefundCreateManyAndReturnArgs} args - Arguments to create many Refunds.
     * @example
     * // Create many Refunds
     * const refund = await prisma.refund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefundCreateManyAndReturnArgs>(args?: SelectSubset<T, RefundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Refund.
     * @param {RefundDeleteArgs} args - Arguments to delete one Refund.
     * @example
     * // Delete one Refund
     * const Refund = await prisma.refund.delete({
     *   where: {
     *     // ... filter to delete one Refund
     *   }
     * })
     * 
     */
    delete<T extends RefundDeleteArgs>(args: SelectSubset<T, RefundDeleteArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Refund.
     * @param {RefundUpdateArgs} args - Arguments to update one Refund.
     * @example
     * // Update one Refund
     * const refund = await prisma.refund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefundUpdateArgs>(args: SelectSubset<T, RefundUpdateArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Refunds.
     * @param {RefundDeleteManyArgs} args - Arguments to filter Refunds to delete.
     * @example
     * // Delete a few Refunds
     * const { count } = await prisma.refund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefundDeleteManyArgs>(args?: SelectSubset<T, RefundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefundUpdateManyArgs>(args: SelectSubset<T, RefundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refunds and returns the data updated in the database.
     * @param {RefundUpdateManyAndReturnArgs} args - Arguments to update many Refunds.
     * @example
     * // Update many Refunds
     * const refund = await prisma.refund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Refunds and only return the `id`
     * const refundWithIdOnly = await prisma.refund.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefundUpdateManyAndReturnArgs>(args: SelectSubset<T, RefundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Refund.
     * @param {RefundUpsertArgs} args - Arguments to update or create a Refund.
     * @example
     * // Update or create a Refund
     * const refund = await prisma.refund.upsert({
     *   create: {
     *     // ... data to create a Refund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refund we want to update
     *   }
     * })
     */
    upsert<T extends RefundUpsertArgs>(args: SelectSubset<T, RefundUpsertArgs<ExtArgs>>): Prisma__RefundClient<$Result.GetResult<Prisma.$RefundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Refunds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundCountArgs} args - Arguments to filter Refunds to count.
     * @example
     * // Count the number of Refunds
     * const count = await prisma.refund.count({
     *   where: {
     *     // ... the filter for the Refunds we want to count
     *   }
     * })
    **/
    count<T extends RefundCountArgs>(
      args?: Subset<T, RefundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefundAggregateArgs>(args: Subset<T, RefundAggregateArgs>): Prisma.PrismaPromise<GetRefundAggregateType<T>>

    /**
     * Group by Refund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefundGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefundGroupByArgs['orderBy'] }
        : { orderBy?: RefundGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refund model
   */
  readonly fields: RefundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Refund model
   */
  interface RefundFieldRefs {
    readonly id: FieldRef<"Refund", 'String'>
    readonly paymentId: FieldRef<"Refund", 'String'>
    readonly amountPaise: FieldRef<"Refund", 'Int'>
    readonly status: FieldRef<"Refund", 'String'>
    readonly reason: FieldRef<"Refund", 'String'>
    readonly createdAt: FieldRef<"Refund", 'DateTime'>
    readonly processedAt: FieldRef<"Refund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Refund findUnique
   */
  export type RefundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findUniqueOrThrow
   */
  export type RefundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund findFirst
   */
  export type RefundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findFirstOrThrow
   */
  export type RefundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refund to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refunds.
     */
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund findMany
   */
  export type RefundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter, which Refunds to fetch.
     */
    where?: RefundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refunds to fetch.
     */
    orderBy?: RefundOrderByWithRelationInput | RefundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refunds.
     */
    cursor?: RefundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refunds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refunds.
     */
    skip?: number
    distinct?: RefundScalarFieldEnum | RefundScalarFieldEnum[]
  }

  /**
   * Refund create
   */
  export type RefundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to create a Refund.
     */
    data: XOR<RefundCreateInput, RefundUncheckedCreateInput>
  }

  /**
   * Refund createMany
   */
  export type RefundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Refund createManyAndReturn
   */
  export type RefundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to create many Refunds.
     */
    data: RefundCreateManyInput | RefundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund update
   */
  export type RefundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The data needed to update a Refund.
     */
    data: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
    /**
     * Choose, which Refund to update.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund updateMany
   */
  export type RefundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
  }

  /**
   * Refund updateManyAndReturn
   */
  export type RefundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * The data used to update Refunds.
     */
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyInput>
    /**
     * Filter which Refunds to update
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Refund upsert
   */
  export type RefundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * The filter to search for the Refund to update in case it exists.
     */
    where: RefundWhereUniqueInput
    /**
     * In case the Refund found by the `where` argument doesn't exist, create a new Refund with this data.
     */
    create: XOR<RefundCreateInput, RefundUncheckedCreateInput>
    /**
     * In case the Refund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefundUpdateInput, RefundUncheckedUpdateInput>
  }

  /**
   * Refund delete
   */
  export type RefundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
    /**
     * Filter which Refund to delete.
     */
    where: RefundWhereUniqueInput
  }

  /**
   * Refund deleteMany
   */
  export type RefundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refunds to delete
     */
    where?: RefundWhereInput
    /**
     * Limit how many Refunds to delete.
     */
    limit?: number
  }

  /**
   * Refund without action
   */
  export type RefundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refund
     */
    select?: RefundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Refund
     */
    omit?: RefundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefundInclude<ExtArgs> | null
  }


  /**
   * Model Chargeback
   */

  export type AggregateChargeback = {
    _count: ChargebackCountAggregateOutputType | null
    _avg: ChargebackAvgAggregateOutputType | null
    _sum: ChargebackSumAggregateOutputType | null
    _min: ChargebackMinAggregateOutputType | null
    _max: ChargebackMaxAggregateOutputType | null
  }

  export type ChargebackAvgAggregateOutputType = {
    amountPaise: number | null
  }

  export type ChargebackSumAggregateOutputType = {
    amountPaise: number | null
  }

  export type ChargebackMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    amountPaise: number | null
    reason: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ChargebackMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    amountPaise: number | null
    reason: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ChargebackCountAggregateOutputType = {
    id: number
    paymentId: number
    amountPaise: number
    reason: number
    status: number
    createdAt: number
    _all: number
  }


  export type ChargebackAvgAggregateInputType = {
    amountPaise?: true
  }

  export type ChargebackSumAggregateInputType = {
    amountPaise?: true
  }

  export type ChargebackMinAggregateInputType = {
    id?: true
    paymentId?: true
    amountPaise?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type ChargebackMaxAggregateInputType = {
    id?: true
    paymentId?: true
    amountPaise?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type ChargebackCountAggregateInputType = {
    id?: true
    paymentId?: true
    amountPaise?: true
    reason?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ChargebackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chargeback to aggregate.
     */
    where?: ChargebackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargebacks to fetch.
     */
    orderBy?: ChargebackOrderByWithRelationInput | ChargebackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargebackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargebacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargebacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chargebacks
    **/
    _count?: true | ChargebackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargebackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargebackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargebackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargebackMaxAggregateInputType
  }

  export type GetChargebackAggregateType<T extends ChargebackAggregateArgs> = {
        [P in keyof T & keyof AggregateChargeback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChargeback[P]>
      : GetScalarType<T[P], AggregateChargeback[P]>
  }




  export type ChargebackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargebackWhereInput
    orderBy?: ChargebackOrderByWithAggregationInput | ChargebackOrderByWithAggregationInput[]
    by: ChargebackScalarFieldEnum[] | ChargebackScalarFieldEnum
    having?: ChargebackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargebackCountAggregateInputType | true
    _avg?: ChargebackAvgAggregateInputType
    _sum?: ChargebackSumAggregateInputType
    _min?: ChargebackMinAggregateInputType
    _max?: ChargebackMaxAggregateInputType
  }

  export type ChargebackGroupByOutputType = {
    id: string
    paymentId: string
    amountPaise: number
    reason: string | null
    status: string
    createdAt: Date
    _count: ChargebackCountAggregateOutputType | null
    _avg: ChargebackAvgAggregateOutputType | null
    _sum: ChargebackSumAggregateOutputType | null
    _min: ChargebackMinAggregateOutputType | null
    _max: ChargebackMaxAggregateOutputType | null
  }

  type GetChargebackGroupByPayload<T extends ChargebackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargebackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargebackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargebackGroupByOutputType[P]>
            : GetScalarType<T[P], ChargebackGroupByOutputType[P]>
        }
      >
    >


  export type ChargebackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amountPaise?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargeback"]>

  export type ChargebackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amountPaise?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargeback"]>

  export type ChargebackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    amountPaise?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chargeback"]>

  export type ChargebackSelectScalar = {
    id?: boolean
    paymentId?: boolean
    amountPaise?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ChargebackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "amountPaise" | "reason" | "status" | "createdAt", ExtArgs["result"]["chargeback"]>
  export type ChargebackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type ChargebackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type ChargebackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $ChargebackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chargeback"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      amountPaise: number
      reason: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["chargeback"]>
    composites: {}
  }

  type ChargebackGetPayload<S extends boolean | null | undefined | ChargebackDefaultArgs> = $Result.GetResult<Prisma.$ChargebackPayload, S>

  type ChargebackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargebackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargebackCountAggregateInputType | true
    }

  export interface ChargebackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chargeback'], meta: { name: 'Chargeback' } }
    /**
     * Find zero or one Chargeback that matches the filter.
     * @param {ChargebackFindUniqueArgs} args - Arguments to find a Chargeback
     * @example
     * // Get one Chargeback
     * const chargeback = await prisma.chargeback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargebackFindUniqueArgs>(args: SelectSubset<T, ChargebackFindUniqueArgs<ExtArgs>>): Prisma__ChargebackClient<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chargeback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargebackFindUniqueOrThrowArgs} args - Arguments to find a Chargeback
     * @example
     * // Get one Chargeback
     * const chargeback = await prisma.chargeback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargebackFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargebackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargebackClient<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chargeback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargebackFindFirstArgs} args - Arguments to find a Chargeback
     * @example
     * // Get one Chargeback
     * const chargeback = await prisma.chargeback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargebackFindFirstArgs>(args?: SelectSubset<T, ChargebackFindFirstArgs<ExtArgs>>): Prisma__ChargebackClient<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chargeback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargebackFindFirstOrThrowArgs} args - Arguments to find a Chargeback
     * @example
     * // Get one Chargeback
     * const chargeback = await prisma.chargeback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargebackFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargebackFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargebackClient<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chargebacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargebackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chargebacks
     * const chargebacks = await prisma.chargeback.findMany()
     * 
     * // Get first 10 Chargebacks
     * const chargebacks = await prisma.chargeback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargebackWithIdOnly = await prisma.chargeback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargebackFindManyArgs>(args?: SelectSubset<T, ChargebackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chargeback.
     * @param {ChargebackCreateArgs} args - Arguments to create a Chargeback.
     * @example
     * // Create one Chargeback
     * const Chargeback = await prisma.chargeback.create({
     *   data: {
     *     // ... data to create a Chargeback
     *   }
     * })
     * 
     */
    create<T extends ChargebackCreateArgs>(args: SelectSubset<T, ChargebackCreateArgs<ExtArgs>>): Prisma__ChargebackClient<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chargebacks.
     * @param {ChargebackCreateManyArgs} args - Arguments to create many Chargebacks.
     * @example
     * // Create many Chargebacks
     * const chargeback = await prisma.chargeback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargebackCreateManyArgs>(args?: SelectSubset<T, ChargebackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chargebacks and returns the data saved in the database.
     * @param {ChargebackCreateManyAndReturnArgs} args - Arguments to create many Chargebacks.
     * @example
     * // Create many Chargebacks
     * const chargeback = await prisma.chargeback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chargebacks and only return the `id`
     * const chargebackWithIdOnly = await prisma.chargeback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargebackCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargebackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chargeback.
     * @param {ChargebackDeleteArgs} args - Arguments to delete one Chargeback.
     * @example
     * // Delete one Chargeback
     * const Chargeback = await prisma.chargeback.delete({
     *   where: {
     *     // ... filter to delete one Chargeback
     *   }
     * })
     * 
     */
    delete<T extends ChargebackDeleteArgs>(args: SelectSubset<T, ChargebackDeleteArgs<ExtArgs>>): Prisma__ChargebackClient<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chargeback.
     * @param {ChargebackUpdateArgs} args - Arguments to update one Chargeback.
     * @example
     * // Update one Chargeback
     * const chargeback = await prisma.chargeback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargebackUpdateArgs>(args: SelectSubset<T, ChargebackUpdateArgs<ExtArgs>>): Prisma__ChargebackClient<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chargebacks.
     * @param {ChargebackDeleteManyArgs} args - Arguments to filter Chargebacks to delete.
     * @example
     * // Delete a few Chargebacks
     * const { count } = await prisma.chargeback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargebackDeleteManyArgs>(args?: SelectSubset<T, ChargebackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chargebacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargebackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chargebacks
     * const chargeback = await prisma.chargeback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargebackUpdateManyArgs>(args: SelectSubset<T, ChargebackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chargebacks and returns the data updated in the database.
     * @param {ChargebackUpdateManyAndReturnArgs} args - Arguments to update many Chargebacks.
     * @example
     * // Update many Chargebacks
     * const chargeback = await prisma.chargeback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chargebacks and only return the `id`
     * const chargebackWithIdOnly = await prisma.chargeback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargebackUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargebackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chargeback.
     * @param {ChargebackUpsertArgs} args - Arguments to update or create a Chargeback.
     * @example
     * // Update or create a Chargeback
     * const chargeback = await prisma.chargeback.upsert({
     *   create: {
     *     // ... data to create a Chargeback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chargeback we want to update
     *   }
     * })
     */
    upsert<T extends ChargebackUpsertArgs>(args: SelectSubset<T, ChargebackUpsertArgs<ExtArgs>>): Prisma__ChargebackClient<$Result.GetResult<Prisma.$ChargebackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chargebacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargebackCountArgs} args - Arguments to filter Chargebacks to count.
     * @example
     * // Count the number of Chargebacks
     * const count = await prisma.chargeback.count({
     *   where: {
     *     // ... the filter for the Chargebacks we want to count
     *   }
     * })
    **/
    count<T extends ChargebackCountArgs>(
      args?: Subset<T, ChargebackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargebackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chargeback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargebackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargebackAggregateArgs>(args: Subset<T, ChargebackAggregateArgs>): Prisma.PrismaPromise<GetChargebackAggregateType<T>>

    /**
     * Group by Chargeback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargebackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargebackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargebackGroupByArgs['orderBy'] }
        : { orderBy?: ChargebackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargebackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargebackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chargeback model
   */
  readonly fields: ChargebackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chargeback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargebackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chargeback model
   */
  interface ChargebackFieldRefs {
    readonly id: FieldRef<"Chargeback", 'String'>
    readonly paymentId: FieldRef<"Chargeback", 'String'>
    readonly amountPaise: FieldRef<"Chargeback", 'Int'>
    readonly reason: FieldRef<"Chargeback", 'String'>
    readonly status: FieldRef<"Chargeback", 'String'>
    readonly createdAt: FieldRef<"Chargeback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chargeback findUnique
   */
  export type ChargebackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * Filter, which Chargeback to fetch.
     */
    where: ChargebackWhereUniqueInput
  }

  /**
   * Chargeback findUniqueOrThrow
   */
  export type ChargebackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * Filter, which Chargeback to fetch.
     */
    where: ChargebackWhereUniqueInput
  }

  /**
   * Chargeback findFirst
   */
  export type ChargebackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * Filter, which Chargeback to fetch.
     */
    where?: ChargebackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargebacks to fetch.
     */
    orderBy?: ChargebackOrderByWithRelationInput | ChargebackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chargebacks.
     */
    cursor?: ChargebackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargebacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargebacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargebacks.
     */
    distinct?: ChargebackScalarFieldEnum | ChargebackScalarFieldEnum[]
  }

  /**
   * Chargeback findFirstOrThrow
   */
  export type ChargebackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * Filter, which Chargeback to fetch.
     */
    where?: ChargebackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargebacks to fetch.
     */
    orderBy?: ChargebackOrderByWithRelationInput | ChargebackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chargebacks.
     */
    cursor?: ChargebackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargebacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargebacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chargebacks.
     */
    distinct?: ChargebackScalarFieldEnum | ChargebackScalarFieldEnum[]
  }

  /**
   * Chargeback findMany
   */
  export type ChargebackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * Filter, which Chargebacks to fetch.
     */
    where?: ChargebackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chargebacks to fetch.
     */
    orderBy?: ChargebackOrderByWithRelationInput | ChargebackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chargebacks.
     */
    cursor?: ChargebackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chargebacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chargebacks.
     */
    skip?: number
    distinct?: ChargebackScalarFieldEnum | ChargebackScalarFieldEnum[]
  }

  /**
   * Chargeback create
   */
  export type ChargebackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * The data needed to create a Chargeback.
     */
    data: XOR<ChargebackCreateInput, ChargebackUncheckedCreateInput>
  }

  /**
   * Chargeback createMany
   */
  export type ChargebackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chargebacks.
     */
    data: ChargebackCreateManyInput | ChargebackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chargeback createManyAndReturn
   */
  export type ChargebackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * The data used to create many Chargebacks.
     */
    data: ChargebackCreateManyInput | ChargebackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chargeback update
   */
  export type ChargebackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * The data needed to update a Chargeback.
     */
    data: XOR<ChargebackUpdateInput, ChargebackUncheckedUpdateInput>
    /**
     * Choose, which Chargeback to update.
     */
    where: ChargebackWhereUniqueInput
  }

  /**
   * Chargeback updateMany
   */
  export type ChargebackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chargebacks.
     */
    data: XOR<ChargebackUpdateManyMutationInput, ChargebackUncheckedUpdateManyInput>
    /**
     * Filter which Chargebacks to update
     */
    where?: ChargebackWhereInput
    /**
     * Limit how many Chargebacks to update.
     */
    limit?: number
  }

  /**
   * Chargeback updateManyAndReturn
   */
  export type ChargebackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * The data used to update Chargebacks.
     */
    data: XOR<ChargebackUpdateManyMutationInput, ChargebackUncheckedUpdateManyInput>
    /**
     * Filter which Chargebacks to update
     */
    where?: ChargebackWhereInput
    /**
     * Limit how many Chargebacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chargeback upsert
   */
  export type ChargebackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * The filter to search for the Chargeback to update in case it exists.
     */
    where: ChargebackWhereUniqueInput
    /**
     * In case the Chargeback found by the `where` argument doesn't exist, create a new Chargeback with this data.
     */
    create: XOR<ChargebackCreateInput, ChargebackUncheckedCreateInput>
    /**
     * In case the Chargeback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargebackUpdateInput, ChargebackUncheckedUpdateInput>
  }

  /**
   * Chargeback delete
   */
  export type ChargebackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
    /**
     * Filter which Chargeback to delete.
     */
    where: ChargebackWhereUniqueInput
  }

  /**
   * Chargeback deleteMany
   */
  export type ChargebackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chargebacks to delete
     */
    where?: ChargebackWhereInput
    /**
     * Limit how many Chargebacks to delete.
     */
    limit?: number
  }

  /**
   * Chargeback without action
   */
  export type ChargebackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chargeback
     */
    select?: ChargebackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chargeback
     */
    omit?: ChargebackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChargebackInclude<ExtArgs> | null
  }


  /**
   * Model PaymentStateTransition
   */

  export type AggregatePaymentStateTransition = {
    _count: PaymentStateTransitionCountAggregateOutputType | null
    _min: PaymentStateTransitionMinAggregateOutputType | null
    _max: PaymentStateTransitionMaxAggregateOutputType | null
  }

  export type PaymentStateTransitionMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    fromStatus: string | null
    toStatus: string | null
    reason: string | null
    timestamp: Date | null
    actor: string | null
  }

  export type PaymentStateTransitionMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    fromStatus: string | null
    toStatus: string | null
    reason: string | null
    timestamp: Date | null
    actor: string | null
  }

  export type PaymentStateTransitionCountAggregateOutputType = {
    id: number
    paymentId: number
    fromStatus: number
    toStatus: number
    reason: number
    timestamp: number
    actor: number
    _all: number
  }


  export type PaymentStateTransitionMinAggregateInputType = {
    id?: true
    paymentId?: true
    fromStatus?: true
    toStatus?: true
    reason?: true
    timestamp?: true
    actor?: true
  }

  export type PaymentStateTransitionMaxAggregateInputType = {
    id?: true
    paymentId?: true
    fromStatus?: true
    toStatus?: true
    reason?: true
    timestamp?: true
    actor?: true
  }

  export type PaymentStateTransitionCountAggregateInputType = {
    id?: true
    paymentId?: true
    fromStatus?: true
    toStatus?: true
    reason?: true
    timestamp?: true
    actor?: true
    _all?: true
  }

  export type PaymentStateTransitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentStateTransition to aggregate.
     */
    where?: PaymentStateTransitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentStateTransitions to fetch.
     */
    orderBy?: PaymentStateTransitionOrderByWithRelationInput | PaymentStateTransitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentStateTransitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentStateTransitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentStateTransitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentStateTransitions
    **/
    _count?: true | PaymentStateTransitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentStateTransitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentStateTransitionMaxAggregateInputType
  }

  export type GetPaymentStateTransitionAggregateType<T extends PaymentStateTransitionAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentStateTransition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentStateTransition[P]>
      : GetScalarType<T[P], AggregatePaymentStateTransition[P]>
  }




  export type PaymentStateTransitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentStateTransitionWhereInput
    orderBy?: PaymentStateTransitionOrderByWithAggregationInput | PaymentStateTransitionOrderByWithAggregationInput[]
    by: PaymentStateTransitionScalarFieldEnum[] | PaymentStateTransitionScalarFieldEnum
    having?: PaymentStateTransitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentStateTransitionCountAggregateInputType | true
    _min?: PaymentStateTransitionMinAggregateInputType
    _max?: PaymentStateTransitionMaxAggregateInputType
  }

  export type PaymentStateTransitionGroupByOutputType = {
    id: string
    paymentId: string
    fromStatus: string
    toStatus: string
    reason: string | null
    timestamp: Date
    actor: string
    _count: PaymentStateTransitionCountAggregateOutputType | null
    _min: PaymentStateTransitionMinAggregateOutputType | null
    _max: PaymentStateTransitionMaxAggregateOutputType | null
  }

  type GetPaymentStateTransitionGroupByPayload<T extends PaymentStateTransitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentStateTransitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentStateTransitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentStateTransitionGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentStateTransitionGroupByOutputType[P]>
        }
      >
    >


  export type PaymentStateTransitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    reason?: boolean
    timestamp?: boolean
    actor?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentStateTransition"]>

  export type PaymentStateTransitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    reason?: boolean
    timestamp?: boolean
    actor?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentStateTransition"]>

  export type PaymentStateTransitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    reason?: boolean
    timestamp?: boolean
    actor?: boolean
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentStateTransition"]>

  export type PaymentStateTransitionSelectScalar = {
    id?: boolean
    paymentId?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    reason?: boolean
    timestamp?: boolean
    actor?: boolean
  }

  export type PaymentStateTransitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "fromStatus" | "toStatus" | "reason" | "timestamp" | "actor", ExtArgs["result"]["paymentStateTransition"]>
  export type PaymentStateTransitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type PaymentStateTransitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }
  export type PaymentStateTransitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
  }

  export type $PaymentStateTransitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentStateTransition"
    objects: {
      payment: Prisma.$PaymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      fromStatus: string
      toStatus: string
      reason: string | null
      timestamp: Date
      actor: string
    }, ExtArgs["result"]["paymentStateTransition"]>
    composites: {}
  }

  type PaymentStateTransitionGetPayload<S extends boolean | null | undefined | PaymentStateTransitionDefaultArgs> = $Result.GetResult<Prisma.$PaymentStateTransitionPayload, S>

  type PaymentStateTransitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentStateTransitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentStateTransitionCountAggregateInputType | true
    }

  export interface PaymentStateTransitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentStateTransition'], meta: { name: 'PaymentStateTransition' } }
    /**
     * Find zero or one PaymentStateTransition that matches the filter.
     * @param {PaymentStateTransitionFindUniqueArgs} args - Arguments to find a PaymentStateTransition
     * @example
     * // Get one PaymentStateTransition
     * const paymentStateTransition = await prisma.paymentStateTransition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentStateTransitionFindUniqueArgs>(args: SelectSubset<T, PaymentStateTransitionFindUniqueArgs<ExtArgs>>): Prisma__PaymentStateTransitionClient<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentStateTransition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentStateTransitionFindUniqueOrThrowArgs} args - Arguments to find a PaymentStateTransition
     * @example
     * // Get one PaymentStateTransition
     * const paymentStateTransition = await prisma.paymentStateTransition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentStateTransitionFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentStateTransitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentStateTransitionClient<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentStateTransition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStateTransitionFindFirstArgs} args - Arguments to find a PaymentStateTransition
     * @example
     * // Get one PaymentStateTransition
     * const paymentStateTransition = await prisma.paymentStateTransition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentStateTransitionFindFirstArgs>(args?: SelectSubset<T, PaymentStateTransitionFindFirstArgs<ExtArgs>>): Prisma__PaymentStateTransitionClient<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentStateTransition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStateTransitionFindFirstOrThrowArgs} args - Arguments to find a PaymentStateTransition
     * @example
     * // Get one PaymentStateTransition
     * const paymentStateTransition = await prisma.paymentStateTransition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentStateTransitionFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentStateTransitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentStateTransitionClient<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentStateTransitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStateTransitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentStateTransitions
     * const paymentStateTransitions = await prisma.paymentStateTransition.findMany()
     * 
     * // Get first 10 PaymentStateTransitions
     * const paymentStateTransitions = await prisma.paymentStateTransition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentStateTransitionWithIdOnly = await prisma.paymentStateTransition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentStateTransitionFindManyArgs>(args?: SelectSubset<T, PaymentStateTransitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentStateTransition.
     * @param {PaymentStateTransitionCreateArgs} args - Arguments to create a PaymentStateTransition.
     * @example
     * // Create one PaymentStateTransition
     * const PaymentStateTransition = await prisma.paymentStateTransition.create({
     *   data: {
     *     // ... data to create a PaymentStateTransition
     *   }
     * })
     * 
     */
    create<T extends PaymentStateTransitionCreateArgs>(args: SelectSubset<T, PaymentStateTransitionCreateArgs<ExtArgs>>): Prisma__PaymentStateTransitionClient<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentStateTransitions.
     * @param {PaymentStateTransitionCreateManyArgs} args - Arguments to create many PaymentStateTransitions.
     * @example
     * // Create many PaymentStateTransitions
     * const paymentStateTransition = await prisma.paymentStateTransition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentStateTransitionCreateManyArgs>(args?: SelectSubset<T, PaymentStateTransitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentStateTransitions and returns the data saved in the database.
     * @param {PaymentStateTransitionCreateManyAndReturnArgs} args - Arguments to create many PaymentStateTransitions.
     * @example
     * // Create many PaymentStateTransitions
     * const paymentStateTransition = await prisma.paymentStateTransition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentStateTransitions and only return the `id`
     * const paymentStateTransitionWithIdOnly = await prisma.paymentStateTransition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentStateTransitionCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentStateTransitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentStateTransition.
     * @param {PaymentStateTransitionDeleteArgs} args - Arguments to delete one PaymentStateTransition.
     * @example
     * // Delete one PaymentStateTransition
     * const PaymentStateTransition = await prisma.paymentStateTransition.delete({
     *   where: {
     *     // ... filter to delete one PaymentStateTransition
     *   }
     * })
     * 
     */
    delete<T extends PaymentStateTransitionDeleteArgs>(args: SelectSubset<T, PaymentStateTransitionDeleteArgs<ExtArgs>>): Prisma__PaymentStateTransitionClient<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentStateTransition.
     * @param {PaymentStateTransitionUpdateArgs} args - Arguments to update one PaymentStateTransition.
     * @example
     * // Update one PaymentStateTransition
     * const paymentStateTransition = await prisma.paymentStateTransition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentStateTransitionUpdateArgs>(args: SelectSubset<T, PaymentStateTransitionUpdateArgs<ExtArgs>>): Prisma__PaymentStateTransitionClient<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentStateTransitions.
     * @param {PaymentStateTransitionDeleteManyArgs} args - Arguments to filter PaymentStateTransitions to delete.
     * @example
     * // Delete a few PaymentStateTransitions
     * const { count } = await prisma.paymentStateTransition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentStateTransitionDeleteManyArgs>(args?: SelectSubset<T, PaymentStateTransitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentStateTransitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStateTransitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentStateTransitions
     * const paymentStateTransition = await prisma.paymentStateTransition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentStateTransitionUpdateManyArgs>(args: SelectSubset<T, PaymentStateTransitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentStateTransitions and returns the data updated in the database.
     * @param {PaymentStateTransitionUpdateManyAndReturnArgs} args - Arguments to update many PaymentStateTransitions.
     * @example
     * // Update many PaymentStateTransitions
     * const paymentStateTransition = await prisma.paymentStateTransition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentStateTransitions and only return the `id`
     * const paymentStateTransitionWithIdOnly = await prisma.paymentStateTransition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentStateTransitionUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentStateTransitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentStateTransition.
     * @param {PaymentStateTransitionUpsertArgs} args - Arguments to update or create a PaymentStateTransition.
     * @example
     * // Update or create a PaymentStateTransition
     * const paymentStateTransition = await prisma.paymentStateTransition.upsert({
     *   create: {
     *     // ... data to create a PaymentStateTransition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentStateTransition we want to update
     *   }
     * })
     */
    upsert<T extends PaymentStateTransitionUpsertArgs>(args: SelectSubset<T, PaymentStateTransitionUpsertArgs<ExtArgs>>): Prisma__PaymentStateTransitionClient<$Result.GetResult<Prisma.$PaymentStateTransitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentStateTransitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStateTransitionCountArgs} args - Arguments to filter PaymentStateTransitions to count.
     * @example
     * // Count the number of PaymentStateTransitions
     * const count = await prisma.paymentStateTransition.count({
     *   where: {
     *     // ... the filter for the PaymentStateTransitions we want to count
     *   }
     * })
    **/
    count<T extends PaymentStateTransitionCountArgs>(
      args?: Subset<T, PaymentStateTransitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentStateTransitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentStateTransition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStateTransitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentStateTransitionAggregateArgs>(args: Subset<T, PaymentStateTransitionAggregateArgs>): Prisma.PrismaPromise<GetPaymentStateTransitionAggregateType<T>>

    /**
     * Group by PaymentStateTransition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentStateTransitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentStateTransitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentStateTransitionGroupByArgs['orderBy'] }
        : { orderBy?: PaymentStateTransitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentStateTransitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentStateTransitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentStateTransition model
   */
  readonly fields: PaymentStateTransitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentStateTransition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentStateTransitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentStateTransition model
   */
  interface PaymentStateTransitionFieldRefs {
    readonly id: FieldRef<"PaymentStateTransition", 'String'>
    readonly paymentId: FieldRef<"PaymentStateTransition", 'String'>
    readonly fromStatus: FieldRef<"PaymentStateTransition", 'String'>
    readonly toStatus: FieldRef<"PaymentStateTransition", 'String'>
    readonly reason: FieldRef<"PaymentStateTransition", 'String'>
    readonly timestamp: FieldRef<"PaymentStateTransition", 'DateTime'>
    readonly actor: FieldRef<"PaymentStateTransition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentStateTransition findUnique
   */
  export type PaymentStateTransitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentStateTransition to fetch.
     */
    where: PaymentStateTransitionWhereUniqueInput
  }

  /**
   * PaymentStateTransition findUniqueOrThrow
   */
  export type PaymentStateTransitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentStateTransition to fetch.
     */
    where: PaymentStateTransitionWhereUniqueInput
  }

  /**
   * PaymentStateTransition findFirst
   */
  export type PaymentStateTransitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentStateTransition to fetch.
     */
    where?: PaymentStateTransitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentStateTransitions to fetch.
     */
    orderBy?: PaymentStateTransitionOrderByWithRelationInput | PaymentStateTransitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentStateTransitions.
     */
    cursor?: PaymentStateTransitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentStateTransitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentStateTransitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentStateTransitions.
     */
    distinct?: PaymentStateTransitionScalarFieldEnum | PaymentStateTransitionScalarFieldEnum[]
  }

  /**
   * PaymentStateTransition findFirstOrThrow
   */
  export type PaymentStateTransitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentStateTransition to fetch.
     */
    where?: PaymentStateTransitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentStateTransitions to fetch.
     */
    orderBy?: PaymentStateTransitionOrderByWithRelationInput | PaymentStateTransitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentStateTransitions.
     */
    cursor?: PaymentStateTransitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentStateTransitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentStateTransitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentStateTransitions.
     */
    distinct?: PaymentStateTransitionScalarFieldEnum | PaymentStateTransitionScalarFieldEnum[]
  }

  /**
   * PaymentStateTransition findMany
   */
  export type PaymentStateTransitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * Filter, which PaymentStateTransitions to fetch.
     */
    where?: PaymentStateTransitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentStateTransitions to fetch.
     */
    orderBy?: PaymentStateTransitionOrderByWithRelationInput | PaymentStateTransitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentStateTransitions.
     */
    cursor?: PaymentStateTransitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentStateTransitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentStateTransitions.
     */
    skip?: number
    distinct?: PaymentStateTransitionScalarFieldEnum | PaymentStateTransitionScalarFieldEnum[]
  }

  /**
   * PaymentStateTransition create
   */
  export type PaymentStateTransitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentStateTransition.
     */
    data: XOR<PaymentStateTransitionCreateInput, PaymentStateTransitionUncheckedCreateInput>
  }

  /**
   * PaymentStateTransition createMany
   */
  export type PaymentStateTransitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentStateTransitions.
     */
    data: PaymentStateTransitionCreateManyInput | PaymentStateTransitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentStateTransition createManyAndReturn
   */
  export type PaymentStateTransitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentStateTransitions.
     */
    data: PaymentStateTransitionCreateManyInput | PaymentStateTransitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentStateTransition update
   */
  export type PaymentStateTransitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentStateTransition.
     */
    data: XOR<PaymentStateTransitionUpdateInput, PaymentStateTransitionUncheckedUpdateInput>
    /**
     * Choose, which PaymentStateTransition to update.
     */
    where: PaymentStateTransitionWhereUniqueInput
  }

  /**
   * PaymentStateTransition updateMany
   */
  export type PaymentStateTransitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentStateTransitions.
     */
    data: XOR<PaymentStateTransitionUpdateManyMutationInput, PaymentStateTransitionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentStateTransitions to update
     */
    where?: PaymentStateTransitionWhereInput
    /**
     * Limit how many PaymentStateTransitions to update.
     */
    limit?: number
  }

  /**
   * PaymentStateTransition updateManyAndReturn
   */
  export type PaymentStateTransitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * The data used to update PaymentStateTransitions.
     */
    data: XOR<PaymentStateTransitionUpdateManyMutationInput, PaymentStateTransitionUncheckedUpdateManyInput>
    /**
     * Filter which PaymentStateTransitions to update
     */
    where?: PaymentStateTransitionWhereInput
    /**
     * Limit how many PaymentStateTransitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentStateTransition upsert
   */
  export type PaymentStateTransitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentStateTransition to update in case it exists.
     */
    where: PaymentStateTransitionWhereUniqueInput
    /**
     * In case the PaymentStateTransition found by the `where` argument doesn't exist, create a new PaymentStateTransition with this data.
     */
    create: XOR<PaymentStateTransitionCreateInput, PaymentStateTransitionUncheckedCreateInput>
    /**
     * In case the PaymentStateTransition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentStateTransitionUpdateInput, PaymentStateTransitionUncheckedUpdateInput>
  }

  /**
   * PaymentStateTransition delete
   */
  export type PaymentStateTransitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
    /**
     * Filter which PaymentStateTransition to delete.
     */
    where: PaymentStateTransitionWhereUniqueInput
  }

  /**
   * PaymentStateTransition deleteMany
   */
  export type PaymentStateTransitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentStateTransitions to delete
     */
    where?: PaymentStateTransitionWhereInput
    /**
     * Limit how many PaymentStateTransitions to delete.
     */
    limit?: number
  }

  /**
   * PaymentStateTransition without action
   */
  export type PaymentStateTransitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentStateTransition
     */
    select?: PaymentStateTransitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentStateTransition
     */
    omit?: PaymentStateTransitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentStateTransitionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MerchantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    publicKey: 'publicKey',
    secretKeyHash: 'secretKeyHash',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    businessName: 'businessName',
    email: 'email',
    emailVerified: 'emailVerified',
    otpCode: 'otpCode',
    otpExpiry: 'otpExpiry',
    passwordHash: 'passwordHash',
    secretKey: 'secretKey'
  };

  export type MerchantScalarFieldEnum = (typeof MerchantScalarFieldEnum)[keyof typeof MerchantScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    publicKey: 'publicKey',
    secretKeyHash: 'secretKeyHash',
    environment: 'environment',
    createdAt: 'createdAt',
    revokedAt: 'revokedAt',
    lastUsedAt: 'lastUsedAt',
    secretKey: 'secretKey',
    name: 'name'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const WebhookScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    url: 'url',
    events: 'events',
    secret: 'secret',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebhookScalarFieldEnum = (typeof WebhookScalarFieldEnum)[keyof typeof WebhookScalarFieldEnum]


  export const ApiLogScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    endpoint: 'endpoint',
    method: 'method',
    statusCode: 'statusCode',
    requestBody: 'requestBody',
    responseBody: 'responseBody',
    createdAt: 'createdAt'
  };

  export type ApiLogScalarFieldEnum = (typeof ApiLogScalarFieldEnum)[keyof typeof ApiLogScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    upiId: 'upiId',
    status: 'status',
    createdAt: 'createdAt',
    passwordHash: 'passwordHash',
    transactionPinHash: 'transactionPinHash',
    failedPinAttempts: 'failedPinAttempts',
    lockedUntil: 'lockedUntil'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cardNumber: 'cardNumber',
    expiryMonth: 'expiryMonth',
    expiryYear: 'expiryYear',
    cvvHash: 'cvvHash',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    amountPaise: 'amountPaise',
    currency: 'currency',
    receipt: 'receipt',
    status: 'status',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    userId: 'userId',
    method: 'method',
    status: 'status',
    amountPaise: 'amountPaise',
    riskScore: 'riskScore',
    signature: 'signature',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authorizationId: 'authorizationId',
    capturedAt: 'capturedAt',
    failedReason: 'failedReason',
    refundedPaise: 'refundedPaise'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const LedgerEntriesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    amountPaise: 'amountPaise',
    referenceType: 'referenceType',
    referenceId: 'referenceId',
    balanceAfter: 'balanceAfter',
    createdAt: 'createdAt'
  };

  export type LedgerEntriesScalarFieldEnum = (typeof LedgerEntriesScalarFieldEnum)[keyof typeof LedgerEntriesScalarFieldEnum]


  export const WebhookDeliveryScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    eventId: 'eventId',
    event: 'event',
    payload: 'payload',
    status: 'status',
    attempts: 'attempts',
    url: 'url',
    signature: 'signature',
    timestamp: 'timestamp',
    nextRetryAt: 'nextRetryAt',
    lastError: 'lastError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebhookDeliveryScalarFieldEnum = (typeof WebhookDeliveryScalarFieldEnum)[keyof typeof WebhookDeliveryScalarFieldEnum]


  export const IdempotencyKeyScalarFieldEnum: {
    id: 'id',
    merchantId: 'merchantId',
    key: 'key',
    requestHash: 'requestHash',
    responseBody: 'responseBody',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type IdempotencyKeyScalarFieldEnum = (typeof IdempotencyKeyScalarFieldEnum)[keyof typeof IdempotencyKeyScalarFieldEnum]


  export const RefundScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    amountPaise: 'amountPaise',
    status: 'status',
    reason: 'reason',
    createdAt: 'createdAt',
    processedAt: 'processedAt'
  };

  export type RefundScalarFieldEnum = (typeof RefundScalarFieldEnum)[keyof typeof RefundScalarFieldEnum]


  export const ChargebackScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    amountPaise: 'amountPaise',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ChargebackScalarFieldEnum = (typeof ChargebackScalarFieldEnum)[keyof typeof ChargebackScalarFieldEnum]


  export const PaymentStateTransitionScalarFieldEnum: {
    id: 'id',
    paymentId: 'paymentId',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    reason: 'reason',
    timestamp: 'timestamp',
    actor: 'actor'
  };

  export type PaymentStateTransitionScalarFieldEnum = (typeof PaymentStateTransitionScalarFieldEnum)[keyof typeof PaymentStateTransitionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'MerchantStatus'
   */
  export type EnumMerchantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MerchantStatus'>
    


  /**
   * Reference to a field of type 'MerchantStatus[]'
   */
  export type ListEnumMerchantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MerchantStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'LedgerType'
   */
  export type EnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType'>
    


  /**
   * Reference to a field of type 'LedgerType[]'
   */
  export type ListEnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType[]'>
    


  /**
   * Reference to a field of type 'ReferenceType'
   */
  export type EnumReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferenceType'>
    


  /**
   * Reference to a field of type 'ReferenceType[]'
   */
  export type ListEnumReferenceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReferenceType[]'>
    
  /**
   * Deep Input Types
   */


  export type MerchantWhereInput = {
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    id?: StringFilter<"Merchant"> | string
    name?: StringFilter<"Merchant"> | string
    publicKey?: StringFilter<"Merchant"> | string
    secretKeyHash?: StringFilter<"Merchant"> | string
    status?: EnumMerchantStatusFilter<"Merchant"> | $Enums.MerchantStatus
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeFilter<"Merchant"> | Date | string
    businessName?: StringNullableFilter<"Merchant"> | string | null
    email?: StringFilter<"Merchant"> | string
    emailVerified?: BoolFilter<"Merchant"> | boolean
    otpCode?: StringNullableFilter<"Merchant"> | string | null
    otpExpiry?: DateTimeNullableFilter<"Merchant"> | Date | string | null
    passwordHash?: StringFilter<"Merchant"> | string
    secretKey?: StringNullableFilter<"Merchant"> | string | null
    apiKeys?: ApiKeyListRelationFilter
    apiLogs?: ApiLogListRelationFilter
    idempotencyKeys?: IdempotencyKeyListRelationFilter
    orders?: OrderListRelationFilter
    webhooks?: WebhookListRelationFilter
  }

  export type MerchantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    otpCode?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    secretKey?: SortOrderInput | SortOrder
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    apiLogs?: ApiLogOrderByRelationAggregateInput
    idempotencyKeys?: IdempotencyKeyOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    webhooks?: WebhookOrderByRelationAggregateInput
  }

  export type MerchantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicKey?: string
    email?: string
    AND?: MerchantWhereInput | MerchantWhereInput[]
    OR?: MerchantWhereInput[]
    NOT?: MerchantWhereInput | MerchantWhereInput[]
    name?: StringFilter<"Merchant"> | string
    secretKeyHash?: StringFilter<"Merchant"> | string
    status?: EnumMerchantStatusFilter<"Merchant"> | $Enums.MerchantStatus
    createdAt?: DateTimeFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeFilter<"Merchant"> | Date | string
    businessName?: StringNullableFilter<"Merchant"> | string | null
    emailVerified?: BoolFilter<"Merchant"> | boolean
    otpCode?: StringNullableFilter<"Merchant"> | string | null
    otpExpiry?: DateTimeNullableFilter<"Merchant"> | Date | string | null
    passwordHash?: StringFilter<"Merchant"> | string
    secretKey?: StringNullableFilter<"Merchant"> | string | null
    apiKeys?: ApiKeyListRelationFilter
    apiLogs?: ApiLogListRelationFilter
    idempotencyKeys?: IdempotencyKeyListRelationFilter
    orders?: OrderListRelationFilter
    webhooks?: WebhookListRelationFilter
  }, "id" | "publicKey" | "email">

  export type MerchantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    otpCode?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    secretKey?: SortOrderInput | SortOrder
    _count?: MerchantCountOrderByAggregateInput
    _max?: MerchantMaxOrderByAggregateInput
    _min?: MerchantMinOrderByAggregateInput
  }

  export type MerchantScalarWhereWithAggregatesInput = {
    AND?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    OR?: MerchantScalarWhereWithAggregatesInput[]
    NOT?: MerchantScalarWhereWithAggregatesInput | MerchantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Merchant"> | string
    name?: StringWithAggregatesFilter<"Merchant"> | string
    publicKey?: StringWithAggregatesFilter<"Merchant"> | string
    secretKeyHash?: StringWithAggregatesFilter<"Merchant"> | string
    status?: EnumMerchantStatusWithAggregatesFilter<"Merchant"> | $Enums.MerchantStatus
    createdAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Merchant"> | Date | string
    businessName?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    email?: StringWithAggregatesFilter<"Merchant"> | string
    emailVerified?: BoolWithAggregatesFilter<"Merchant"> | boolean
    otpCode?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"Merchant"> | Date | string | null
    passwordHash?: StringWithAggregatesFilter<"Merchant"> | string
    secretKey?: StringNullableWithAggregatesFilter<"Merchant"> | string | null
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    merchantId?: StringFilter<"ApiKey"> | string
    publicKey?: StringFilter<"ApiKey"> | string
    secretKeyHash?: StringFilter<"ApiKey"> | string
    environment?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    secretKey?: StringNullableFilter<"ApiKey"> | string | null
    name?: StringFilter<"ApiKey"> | string
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    secretKey?: SortOrderInput | SortOrder
    name?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    publicKey?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    merchantId?: StringFilter<"ApiKey"> | string
    secretKeyHash?: StringFilter<"ApiKey"> | string
    environment?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    secretKey?: StringNullableFilter<"ApiKey"> | string | null
    name?: StringFilter<"ApiKey"> | string
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }, "id" | "publicKey">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    secretKey?: SortOrderInput | SortOrder
    name?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    merchantId?: StringWithAggregatesFilter<"ApiKey"> | string
    publicKey?: StringWithAggregatesFilter<"ApiKey"> | string
    secretKeyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    environment?: StringWithAggregatesFilter<"ApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
    revokedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    secretKey?: StringNullableWithAggregatesFilter<"ApiKey"> | string | null
    name?: StringWithAggregatesFilter<"ApiKey"> | string
  }

  export type WebhookWhereInput = {
    AND?: WebhookWhereInput | WebhookWhereInput[]
    OR?: WebhookWhereInput[]
    NOT?: WebhookWhereInput | WebhookWhereInput[]
    id?: StringFilter<"Webhook"> | string
    merchantId?: StringFilter<"Webhook"> | string
    url?: StringFilter<"Webhook"> | string
    events?: StringNullableListFilter<"Webhook">
    secret?: StringFilter<"Webhook"> | string
    status?: StringFilter<"Webhook"> | string
    createdAt?: DateTimeFilter<"Webhook"> | Date | string
    updatedAt?: DateTimeFilter<"Webhook"> | Date | string
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }

  export type WebhookOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    events?: SortOrder
    secret?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type WebhookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookWhereInput | WebhookWhereInput[]
    OR?: WebhookWhereInput[]
    NOT?: WebhookWhereInput | WebhookWhereInput[]
    merchantId?: StringFilter<"Webhook"> | string
    url?: StringFilter<"Webhook"> | string
    events?: StringNullableListFilter<"Webhook">
    secret?: StringFilter<"Webhook"> | string
    status?: StringFilter<"Webhook"> | string
    createdAt?: DateTimeFilter<"Webhook"> | Date | string
    updatedAt?: DateTimeFilter<"Webhook"> | Date | string
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }, "id">

  export type WebhookOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    events?: SortOrder
    secret?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebhookCountOrderByAggregateInput
    _max?: WebhookMaxOrderByAggregateInput
    _min?: WebhookMinOrderByAggregateInput
  }

  export type WebhookScalarWhereWithAggregatesInput = {
    AND?: WebhookScalarWhereWithAggregatesInput | WebhookScalarWhereWithAggregatesInput[]
    OR?: WebhookScalarWhereWithAggregatesInput[]
    NOT?: WebhookScalarWhereWithAggregatesInput | WebhookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Webhook"> | string
    merchantId?: StringWithAggregatesFilter<"Webhook"> | string
    url?: StringWithAggregatesFilter<"Webhook"> | string
    events?: StringNullableListFilter<"Webhook">
    secret?: StringWithAggregatesFilter<"Webhook"> | string
    status?: StringWithAggregatesFilter<"Webhook"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Webhook"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Webhook"> | Date | string
  }

  export type ApiLogWhereInput = {
    AND?: ApiLogWhereInput | ApiLogWhereInput[]
    OR?: ApiLogWhereInput[]
    NOT?: ApiLogWhereInput | ApiLogWhereInput[]
    id?: StringFilter<"ApiLog"> | string
    merchantId?: StringFilter<"ApiLog"> | string
    endpoint?: StringFilter<"ApiLog"> | string
    method?: StringFilter<"ApiLog"> | string
    statusCode?: IntFilter<"ApiLog"> | number
    requestBody?: StringNullableFilter<"ApiLog"> | string | null
    responseBody?: StringNullableFilter<"ApiLog"> | string | null
    createdAt?: DateTimeFilter<"ApiLog"> | Date | string
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }

  export type ApiLogOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type ApiLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApiLogWhereInput | ApiLogWhereInput[]
    OR?: ApiLogWhereInput[]
    NOT?: ApiLogWhereInput | ApiLogWhereInput[]
    merchantId?: StringFilter<"ApiLog"> | string
    endpoint?: StringFilter<"ApiLog"> | string
    method?: StringFilter<"ApiLog"> | string
    statusCode?: IntFilter<"ApiLog"> | number
    requestBody?: StringNullableFilter<"ApiLog"> | string | null
    responseBody?: StringNullableFilter<"ApiLog"> | string | null
    createdAt?: DateTimeFilter<"ApiLog"> | Date | string
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }, "id">

  export type ApiLogOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    requestBody?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ApiLogCountOrderByAggregateInput
    _avg?: ApiLogAvgOrderByAggregateInput
    _max?: ApiLogMaxOrderByAggregateInput
    _min?: ApiLogMinOrderByAggregateInput
    _sum?: ApiLogSumOrderByAggregateInput
  }

  export type ApiLogScalarWhereWithAggregatesInput = {
    AND?: ApiLogScalarWhereWithAggregatesInput | ApiLogScalarWhereWithAggregatesInput[]
    OR?: ApiLogScalarWhereWithAggregatesInput[]
    NOT?: ApiLogScalarWhereWithAggregatesInput | ApiLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiLog"> | string
    merchantId?: StringWithAggregatesFilter<"ApiLog"> | string
    endpoint?: StringWithAggregatesFilter<"ApiLog"> | string
    method?: StringWithAggregatesFilter<"ApiLog"> | string
    statusCode?: IntWithAggregatesFilter<"ApiLog"> | number
    requestBody?: StringNullableWithAggregatesFilter<"ApiLog"> | string | null
    responseBody?: StringNullableWithAggregatesFilter<"ApiLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ApiLog"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    upiId?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    passwordHash?: StringFilter<"User"> | string
    transactionPinHash?: StringNullableFilter<"User"> | string | null
    failedPinAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    cards?: CardListRelationFilter
    ledgerEntries?: LedgerEntriesListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    upiId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    transactionPinHash?: SortOrderInput | SortOrder
    failedPinAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    cards?: CardOrderByRelationAggregateInput
    ledgerEntries?: LedgerEntriesOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    upiId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    passwordHash?: StringFilter<"User"> | string
    transactionPinHash?: StringNullableFilter<"User"> | string | null
    failedPinAttempts?: IntFilter<"User"> | number
    lockedUntil?: DateTimeNullableFilter<"User"> | Date | string | null
    cards?: CardListRelationFilter
    ledgerEntries?: LedgerEntriesListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "email" | "upiId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    upiId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    transactionPinHash?: SortOrderInput | SortOrder
    failedPinAttempts?: SortOrder
    lockedUntil?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    upiId?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    transactionPinHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    failedPinAttempts?: IntWithAggregatesFilter<"User"> | number
    lockedUntil?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    userId?: StringFilter<"Card"> | string
    cardNumber?: StringFilter<"Card"> | string
    expiryMonth?: IntFilter<"Card"> | number
    expiryYear?: IntFilter<"Card"> | number
    cvvHash?: StringFilter<"Card"> | string
    status?: StringFilter<"Card"> | string
    createdAt?: DateTimeFilter<"Card"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    cvvHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cardNumber?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    userId?: StringFilter<"Card"> | string
    expiryMonth?: IntFilter<"Card"> | number
    expiryYear?: IntFilter<"Card"> | number
    cvvHash?: StringFilter<"Card"> | string
    status?: StringFilter<"Card"> | string
    createdAt?: DateTimeFilter<"Card"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "cardNumber">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    cvvHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    userId?: StringWithAggregatesFilter<"Card"> | string
    cardNumber?: StringWithAggregatesFilter<"Card"> | string
    expiryMonth?: IntWithAggregatesFilter<"Card"> | number
    expiryYear?: IntWithAggregatesFilter<"Card"> | number
    cvvHash?: StringWithAggregatesFilter<"Card"> | string
    status?: StringWithAggregatesFilter<"Card"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    merchantId?: StringFilter<"Order"> | string
    amountPaise?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    receipt?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    idempotencyKey?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    receipt?: SortOrderInput | SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    merchant?: MerchantOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idempotencyKey?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    merchantId?: StringFilter<"Order"> | string
    amountPaise?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    receipt?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
    payments?: PaymentListRelationFilter
  }, "id" | "idempotencyKey">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    receipt?: SortOrderInput | SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    merchantId?: StringWithAggregatesFilter<"Order"> | string
    amountPaise?: IntWithAggregatesFilter<"Order"> | number
    currency?: StringWithAggregatesFilter<"Order"> | string
    receipt?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    idempotencyKey?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amountPaise?: IntFilter<"Payment"> | number
    riskScore?: FloatNullableFilter<"Payment"> | number | null
    signature?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    authorizationId?: StringNullableFilter<"Payment"> | string | null
    capturedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedReason?: StringNullableFilter<"Payment"> | string | null
    refundedPaise?: IntFilter<"Payment"> | number
    chargebacks?: ChargebackListRelationFilter
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transitions?: PaymentStateTransitionListRelationFilter
    refunds?: RefundListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amountPaise?: SortOrder
    riskScore?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorizationId?: SortOrderInput | SortOrder
    capturedAt?: SortOrderInput | SortOrder
    failedReason?: SortOrderInput | SortOrder
    refundedPaise?: SortOrder
    chargebacks?: ChargebackOrderByRelationAggregateInput
    order?: OrderOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    transitions?: PaymentStateTransitionOrderByRelationAggregateInput
    refunds?: RefundOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    orderId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amountPaise?: IntFilter<"Payment"> | number
    riskScore?: FloatNullableFilter<"Payment"> | number | null
    signature?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    authorizationId?: StringNullableFilter<"Payment"> | string | null
    capturedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedReason?: StringNullableFilter<"Payment"> | string | null
    refundedPaise?: IntFilter<"Payment"> | number
    chargebacks?: ChargebackListRelationFilter
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transitions?: PaymentStateTransitionListRelationFilter
    refunds?: RefundListRelationFilter
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amountPaise?: SortOrder
    riskScore?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorizationId?: SortOrderInput | SortOrder
    capturedAt?: SortOrderInput | SortOrder
    failedReason?: SortOrderInput | SortOrder
    refundedPaise?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    method?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    amountPaise?: IntWithAggregatesFilter<"Payment"> | number
    riskScore?: FloatNullableWithAggregatesFilter<"Payment"> | number | null
    signature?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    authorizationId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    capturedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    failedReason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refundedPaise?: IntWithAggregatesFilter<"Payment"> | number
  }

  export type LedgerEntriesWhereInput = {
    AND?: LedgerEntriesWhereInput | LedgerEntriesWhereInput[]
    OR?: LedgerEntriesWhereInput[]
    NOT?: LedgerEntriesWhereInput | LedgerEntriesWhereInput[]
    id?: StringFilter<"LedgerEntries"> | string
    userId?: StringFilter<"LedgerEntries"> | string
    type?: EnumLedgerTypeFilter<"LedgerEntries"> | $Enums.LedgerType
    amountPaise?: IntFilter<"LedgerEntries"> | number
    referenceType?: EnumReferenceTypeFilter<"LedgerEntries"> | $Enums.ReferenceType
    referenceId?: StringFilter<"LedgerEntries"> | string
    balanceAfter?: IntFilter<"LedgerEntries"> | number
    createdAt?: DateTimeFilter<"LedgerEntries"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LedgerEntriesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amountPaise?: SortOrder
    referenceType?: SortOrder
    referenceId?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LedgerEntriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LedgerEntriesWhereInput | LedgerEntriesWhereInput[]
    OR?: LedgerEntriesWhereInput[]
    NOT?: LedgerEntriesWhereInput | LedgerEntriesWhereInput[]
    userId?: StringFilter<"LedgerEntries"> | string
    type?: EnumLedgerTypeFilter<"LedgerEntries"> | $Enums.LedgerType
    amountPaise?: IntFilter<"LedgerEntries"> | number
    referenceType?: EnumReferenceTypeFilter<"LedgerEntries"> | $Enums.ReferenceType
    referenceId?: StringFilter<"LedgerEntries"> | string
    balanceAfter?: IntFilter<"LedgerEntries"> | number
    createdAt?: DateTimeFilter<"LedgerEntries"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LedgerEntriesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amountPaise?: SortOrder
    referenceType?: SortOrder
    referenceId?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
    _count?: LedgerEntriesCountOrderByAggregateInput
    _avg?: LedgerEntriesAvgOrderByAggregateInput
    _max?: LedgerEntriesMaxOrderByAggregateInput
    _min?: LedgerEntriesMinOrderByAggregateInput
    _sum?: LedgerEntriesSumOrderByAggregateInput
  }

  export type LedgerEntriesScalarWhereWithAggregatesInput = {
    AND?: LedgerEntriesScalarWhereWithAggregatesInput | LedgerEntriesScalarWhereWithAggregatesInput[]
    OR?: LedgerEntriesScalarWhereWithAggregatesInput[]
    NOT?: LedgerEntriesScalarWhereWithAggregatesInput | LedgerEntriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LedgerEntries"> | string
    userId?: StringWithAggregatesFilter<"LedgerEntries"> | string
    type?: EnumLedgerTypeWithAggregatesFilter<"LedgerEntries"> | $Enums.LedgerType
    amountPaise?: IntWithAggregatesFilter<"LedgerEntries"> | number
    referenceType?: EnumReferenceTypeWithAggregatesFilter<"LedgerEntries"> | $Enums.ReferenceType
    referenceId?: StringWithAggregatesFilter<"LedgerEntries"> | string
    balanceAfter?: IntWithAggregatesFilter<"LedgerEntries"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LedgerEntries"> | Date | string
  }

  export type WebhookDeliveryWhereInput = {
    AND?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    OR?: WebhookDeliveryWhereInput[]
    NOT?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    id?: StringFilter<"WebhookDelivery"> | string
    merchantId?: StringFilter<"WebhookDelivery"> | string
    eventId?: StringFilter<"WebhookDelivery"> | string
    event?: StringFilter<"WebhookDelivery"> | string
    payload?: StringFilter<"WebhookDelivery"> | string
    status?: StringFilter<"WebhookDelivery"> | string
    attempts?: IntFilter<"WebhookDelivery"> | number
    url?: StringFilter<"WebhookDelivery"> | string
    signature?: StringFilter<"WebhookDelivery"> | string
    timestamp?: StringFilter<"WebhookDelivery"> | string
    nextRetryAt?: DateTimeNullableFilter<"WebhookDelivery"> | Date | string | null
    lastError?: StringNullableFilter<"WebhookDelivery"> | string | null
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
  }

  export type WebhookDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    eventId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    url?: SortOrder
    signature?: SortOrder
    timestamp?: SortOrder
    nextRetryAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    eventId?: string
    AND?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    OR?: WebhookDeliveryWhereInput[]
    NOT?: WebhookDeliveryWhereInput | WebhookDeliveryWhereInput[]
    merchantId?: StringFilter<"WebhookDelivery"> | string
    event?: StringFilter<"WebhookDelivery"> | string
    payload?: StringFilter<"WebhookDelivery"> | string
    status?: StringFilter<"WebhookDelivery"> | string
    attempts?: IntFilter<"WebhookDelivery"> | number
    url?: StringFilter<"WebhookDelivery"> | string
    signature?: StringFilter<"WebhookDelivery"> | string
    timestamp?: StringFilter<"WebhookDelivery"> | string
    nextRetryAt?: DateTimeNullableFilter<"WebhookDelivery"> | Date | string | null
    lastError?: StringNullableFilter<"WebhookDelivery"> | string | null
    createdAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookDelivery"> | Date | string
  }, "id" | "eventId">

  export type WebhookDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    eventId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    url?: SortOrder
    signature?: SortOrder
    timestamp?: SortOrder
    nextRetryAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebhookDeliveryCountOrderByAggregateInput
    _avg?: WebhookDeliveryAvgOrderByAggregateInput
    _max?: WebhookDeliveryMaxOrderByAggregateInput
    _min?: WebhookDeliveryMinOrderByAggregateInput
    _sum?: WebhookDeliverySumOrderByAggregateInput
  }

  export type WebhookDeliveryScalarWhereWithAggregatesInput = {
    AND?: WebhookDeliveryScalarWhereWithAggregatesInput | WebhookDeliveryScalarWhereWithAggregatesInput[]
    OR?: WebhookDeliveryScalarWhereWithAggregatesInput[]
    NOT?: WebhookDeliveryScalarWhereWithAggregatesInput | WebhookDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    merchantId?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    eventId?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    event?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    payload?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    status?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    attempts?: IntWithAggregatesFilter<"WebhookDelivery"> | number
    url?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    signature?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    timestamp?: StringWithAggregatesFilter<"WebhookDelivery"> | string
    nextRetryAt?: DateTimeNullableWithAggregatesFilter<"WebhookDelivery"> | Date | string | null
    lastError?: StringNullableWithAggregatesFilter<"WebhookDelivery"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookDelivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebhookDelivery"> | Date | string
  }

  export type IdempotencyKeyWhereInput = {
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    id?: StringFilter<"IdempotencyKey"> | string
    merchantId?: StringFilter<"IdempotencyKey"> | string
    key?: StringFilter<"IdempotencyKey"> | string
    requestHash?: StringNullableFilter<"IdempotencyKey"> | string | null
    responseBody?: StringNullableFilter<"IdempotencyKey"> | string | null
    status?: StringFilter<"IdempotencyKey"> | string
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }

  export type IdempotencyKeyOrderByWithRelationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    key?: SortOrder
    requestHash?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    merchant?: MerchantOrderByWithRelationInput
  }

  export type IdempotencyKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    merchantId_key?: IdempotencyKeyMerchantIdKeyCompoundUniqueInput
    AND?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    OR?: IdempotencyKeyWhereInput[]
    NOT?: IdempotencyKeyWhereInput | IdempotencyKeyWhereInput[]
    merchantId?: StringFilter<"IdempotencyKey"> | string
    key?: StringFilter<"IdempotencyKey"> | string
    requestHash?: StringNullableFilter<"IdempotencyKey"> | string | null
    responseBody?: StringNullableFilter<"IdempotencyKey"> | string | null
    status?: StringFilter<"IdempotencyKey"> | string
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
    merchant?: XOR<MerchantScalarRelationFilter, MerchantWhereInput>
  }, "id" | "merchantId_key">

  export type IdempotencyKeyOrderByWithAggregationInput = {
    id?: SortOrder
    merchantId?: SortOrder
    key?: SortOrder
    requestHash?: SortOrderInput | SortOrder
    responseBody?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: IdempotencyKeyCountOrderByAggregateInput
    _max?: IdempotencyKeyMaxOrderByAggregateInput
    _min?: IdempotencyKeyMinOrderByAggregateInput
  }

  export type IdempotencyKeyScalarWhereWithAggregatesInput = {
    AND?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    OR?: IdempotencyKeyScalarWhereWithAggregatesInput[]
    NOT?: IdempotencyKeyScalarWhereWithAggregatesInput | IdempotencyKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    merchantId?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    key?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    requestHash?: StringNullableWithAggregatesFilter<"IdempotencyKey"> | string | null
    responseBody?: StringNullableWithAggregatesFilter<"IdempotencyKey"> | string | null
    status?: StringWithAggregatesFilter<"IdempotencyKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IdempotencyKey"> | Date | string
  }

  export type RefundWhereInput = {
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    id?: StringFilter<"Refund"> | string
    paymentId?: StringFilter<"Refund"> | string
    amountPaise?: IntFilter<"Refund"> | number
    status?: StringFilter<"Refund"> | string
    reason?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    processedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type RefundOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type RefundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefundWhereInput | RefundWhereInput[]
    OR?: RefundWhereInput[]
    NOT?: RefundWhereInput | RefundWhereInput[]
    paymentId?: StringFilter<"Refund"> | string
    amountPaise?: IntFilter<"Refund"> | number
    status?: StringFilter<"Refund"> | string
    reason?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    processedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id">

  export type RefundOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    status?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    _count?: RefundCountOrderByAggregateInput
    _avg?: RefundAvgOrderByAggregateInput
    _max?: RefundMaxOrderByAggregateInput
    _min?: RefundMinOrderByAggregateInput
    _sum?: RefundSumOrderByAggregateInput
  }

  export type RefundScalarWhereWithAggregatesInput = {
    AND?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    OR?: RefundScalarWhereWithAggregatesInput[]
    NOT?: RefundScalarWhereWithAggregatesInput | RefundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Refund"> | string
    paymentId?: StringWithAggregatesFilter<"Refund"> | string
    amountPaise?: IntWithAggregatesFilter<"Refund"> | number
    status?: StringWithAggregatesFilter<"Refund"> | string
    reason?: StringNullableWithAggregatesFilter<"Refund"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Refund"> | Date | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"Refund"> | Date | string | null
  }

  export type ChargebackWhereInput = {
    AND?: ChargebackWhereInput | ChargebackWhereInput[]
    OR?: ChargebackWhereInput[]
    NOT?: ChargebackWhereInput | ChargebackWhereInput[]
    id?: StringFilter<"Chargeback"> | string
    paymentId?: StringFilter<"Chargeback"> | string
    amountPaise?: IntFilter<"Chargeback"> | number
    reason?: StringNullableFilter<"Chargeback"> | string | null
    status?: StringFilter<"Chargeback"> | string
    createdAt?: DateTimeFilter<"Chargeback"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type ChargebackOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type ChargebackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChargebackWhereInput | ChargebackWhereInput[]
    OR?: ChargebackWhereInput[]
    NOT?: ChargebackWhereInput | ChargebackWhereInput[]
    paymentId?: StringFilter<"Chargeback"> | string
    amountPaise?: IntFilter<"Chargeback"> | number
    reason?: StringNullableFilter<"Chargeback"> | string | null
    status?: StringFilter<"Chargeback"> | string
    createdAt?: DateTimeFilter<"Chargeback"> | Date | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id">

  export type ChargebackOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ChargebackCountOrderByAggregateInput
    _avg?: ChargebackAvgOrderByAggregateInput
    _max?: ChargebackMaxOrderByAggregateInput
    _min?: ChargebackMinOrderByAggregateInput
    _sum?: ChargebackSumOrderByAggregateInput
  }

  export type ChargebackScalarWhereWithAggregatesInput = {
    AND?: ChargebackScalarWhereWithAggregatesInput | ChargebackScalarWhereWithAggregatesInput[]
    OR?: ChargebackScalarWhereWithAggregatesInput[]
    NOT?: ChargebackScalarWhereWithAggregatesInput | ChargebackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chargeback"> | string
    paymentId?: StringWithAggregatesFilter<"Chargeback"> | string
    amountPaise?: IntWithAggregatesFilter<"Chargeback"> | number
    reason?: StringNullableWithAggregatesFilter<"Chargeback"> | string | null
    status?: StringWithAggregatesFilter<"Chargeback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chargeback"> | Date | string
  }

  export type PaymentStateTransitionWhereInput = {
    AND?: PaymentStateTransitionWhereInput | PaymentStateTransitionWhereInput[]
    OR?: PaymentStateTransitionWhereInput[]
    NOT?: PaymentStateTransitionWhereInput | PaymentStateTransitionWhereInput[]
    id?: StringFilter<"PaymentStateTransition"> | string
    paymentId?: StringFilter<"PaymentStateTransition"> | string
    fromStatus?: StringFilter<"PaymentStateTransition"> | string
    toStatus?: StringFilter<"PaymentStateTransition"> | string
    reason?: StringNullableFilter<"PaymentStateTransition"> | string | null
    timestamp?: DateTimeFilter<"PaymentStateTransition"> | Date | string
    actor?: StringFilter<"PaymentStateTransition"> | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }

  export type PaymentStateTransitionOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    reason?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
    payment?: PaymentOrderByWithRelationInput
  }

  export type PaymentStateTransitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentStateTransitionWhereInput | PaymentStateTransitionWhereInput[]
    OR?: PaymentStateTransitionWhereInput[]
    NOT?: PaymentStateTransitionWhereInput | PaymentStateTransitionWhereInput[]
    paymentId?: StringFilter<"PaymentStateTransition"> | string
    fromStatus?: StringFilter<"PaymentStateTransition"> | string
    toStatus?: StringFilter<"PaymentStateTransition"> | string
    reason?: StringNullableFilter<"PaymentStateTransition"> | string | null
    timestamp?: DateTimeFilter<"PaymentStateTransition"> | Date | string
    actor?: StringFilter<"PaymentStateTransition"> | string
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
  }, "id">

  export type PaymentStateTransitionOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    reason?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
    _count?: PaymentStateTransitionCountOrderByAggregateInput
    _max?: PaymentStateTransitionMaxOrderByAggregateInput
    _min?: PaymentStateTransitionMinOrderByAggregateInput
  }

  export type PaymentStateTransitionScalarWhereWithAggregatesInput = {
    AND?: PaymentStateTransitionScalarWhereWithAggregatesInput | PaymentStateTransitionScalarWhereWithAggregatesInput[]
    OR?: PaymentStateTransitionScalarWhereWithAggregatesInput[]
    NOT?: PaymentStateTransitionScalarWhereWithAggregatesInput | PaymentStateTransitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentStateTransition"> | string
    paymentId?: StringWithAggregatesFilter<"PaymentStateTransition"> | string
    fromStatus?: StringWithAggregatesFilter<"PaymentStateTransition"> | string
    toStatus?: StringWithAggregatesFilter<"PaymentStateTransition"> | string
    reason?: StringNullableWithAggregatesFilter<"PaymentStateTransition"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"PaymentStateTransition"> | Date | string
    actor?: StringWithAggregatesFilter<"PaymentStateTransition"> | string
  }

  export type MerchantCreateInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyCreateNestedManyWithoutMerchantInput
    apiLogs?: ApiLogCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyCreateNestedManyWithoutMerchantInput
    orders?: OrderCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutMerchantInput
    apiLogs?: ApiLogUncheckedCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrderUncheckedCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUpdateManyWithoutMerchantNestedInput
    apiLogs?: ApiLogUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUpdateManyWithoutMerchantNestedInput
    orders?: OrderUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutMerchantNestedInput
    apiLogs?: ApiLogUncheckedUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateManyInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
  }

  export type MerchantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MerchantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApiKeyCreateInput = {
    id?: string
    publicKey: string
    secretKeyHash: string
    environment?: string
    createdAt?: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    secretKey?: string | null
    name?: string
    merchant: MerchantCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    merchantId: string
    publicKey: string
    secretKeyHash: string
    environment?: string
    createdAt?: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    secretKey?: string | null
    name?: string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    merchant?: MerchantUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    merchantId: string
    publicKey: string
    secretKeyHash: string
    environment?: string
    createdAt?: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    secretKey?: string | null
    name?: string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WebhookCreateInput = {
    id?: string
    url: string
    events?: WebhookCreateeventsInput | string[]
    secret: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutWebhooksInput
  }

  export type WebhookUncheckedCreateInput = {
    id?: string
    merchantId: string
    url: string
    events?: WebhookCreateeventsInput | string[]
    secret: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    secret?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutWebhooksNestedInput
  }

  export type WebhookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    secret?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookCreateManyInput = {
    id?: string
    merchantId: string
    url: string
    events?: WebhookCreateeventsInput | string[]
    secret: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    secret?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    secret?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiLogCreateInput = {
    id?: string
    endpoint: string
    method: string
    statusCode: number
    requestBody?: string | null
    responseBody?: string | null
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutApiLogsInput
  }

  export type ApiLogUncheckedCreateInput = {
    id?: string
    merchantId: string
    endpoint: string
    method: string
    statusCode: number
    requestBody?: string | null
    responseBody?: string | null
    createdAt?: Date | string
  }

  export type ApiLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutApiLogsNestedInput
  }

  export type ApiLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiLogCreateManyInput = {
    id?: string
    merchantId: string
    endpoint: string
    method: string
    statusCode: number
    requestBody?: string | null
    responseBody?: string | null
    createdAt?: Date | string
  }

  export type ApiLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
    cards?: CardCreateNestedManyWithoutUserInput
    ledgerEntries?: LedgerEntriesCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    ledgerEntries?: LedgerEntriesUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: CardUpdateManyWithoutUserNestedInput
    ledgerEntries?: LedgerEntriesUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    ledgerEntries?: LedgerEntriesUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CardCreateInput = {
    id?: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    cvvHash: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    userId: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    cvvHash: string
    status?: string
    createdAt?: Date | string
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    cvvHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    cvvHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateManyInput = {
    id?: string
    userId: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    cvvHash: string
    status?: string
    createdAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    cvvHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    cvvHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    amountPaise: number
    currency?: string
    receipt?: string | null
    status?: $Enums.OrderStatus
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    merchant: MerchantCreateNestedOneWithoutOrdersInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    merchantId: string
    amountPaise: number
    currency?: string
    receipt?: string | null
    status?: $Enums.OrderStatus
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant?: MerchantUpdateOneRequiredWithoutOrdersNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    merchantId: string
    amountPaise: number
    currency?: string
    receipt?: string | null
    status?: $Enums.OrderStatus
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateInput = {
    id?: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackCreateNestedManyWithoutPaymentInput
    order: OrderCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
    transitions?: PaymentStateTransitionCreateNestedManyWithoutPaymentInput
    refunds?: RefundCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    orderId: string
    userId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackUncheckedCreateNestedManyWithoutPaymentInput
    transitions?: PaymentStateTransitionUncheckedCreateNestedManyWithoutPaymentInput
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUpdateManyWithoutPaymentNestedInput
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    transitions?: PaymentStateTransitionUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUncheckedUpdateManyWithoutPaymentNestedInput
    transitions?: PaymentStateTransitionUncheckedUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    orderId: string
    userId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
  }

  export type LedgerEntriesCreateInput = {
    id?: string
    type: $Enums.LedgerType
    amountPaise: number
    referenceType: $Enums.ReferenceType
    referenceId: string
    balanceAfter: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLedgerEntriesInput
  }

  export type LedgerEntriesUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.LedgerType
    amountPaise: number
    referenceType: $Enums.ReferenceType
    referenceId: string
    balanceAfter: number
    createdAt?: Date | string
  }

  export type LedgerEntriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amountPaise?: IntFieldUpdateOperationsInput | number
    referenceType?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    referenceId?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLedgerEntriesNestedInput
  }

  export type LedgerEntriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amountPaise?: IntFieldUpdateOperationsInput | number
    referenceType?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    referenceId?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntriesCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.LedgerType
    amountPaise: number
    referenceType: $Enums.ReferenceType
    referenceId: string
    balanceAfter: number
    createdAt?: Date | string
  }

  export type LedgerEntriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amountPaise?: IntFieldUpdateOperationsInput | number
    referenceType?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    referenceId?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amountPaise?: IntFieldUpdateOperationsInput | number
    referenceType?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    referenceId?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryCreateInput = {
    id?: string
    merchantId: string
    eventId: string
    event: string
    payload: string
    status?: string
    attempts?: number
    url: string
    signature: string
    timestamp: string
    nextRetryAt?: Date | string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookDeliveryUncheckedCreateInput = {
    id?: string
    merchantId: string
    eventId: string
    event: string
    payload: string
    status?: string
    attempts?: number
    url: string
    signature: string
    timestamp: string
    nextRetryAt?: Date | string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryCreateManyInput = {
    id?: string
    merchantId: string
    eventId: string
    event: string
    payload: string
    status?: string
    attempts?: number
    url: string
    signature: string
    timestamp: string
    nextRetryAt?: Date | string | null
    lastError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attempts?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    timestamp?: StringFieldUpdateOperationsInput | string
    nextRetryAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateInput = {
    id?: string
    key: string
    requestHash?: string | null
    responseBody?: string | null
    status?: string
    createdAt?: Date | string
    merchant: MerchantCreateNestedOneWithoutIdempotencyKeysInput
  }

  export type IdempotencyKeyUncheckedCreateInput = {
    id?: string
    merchantId: string
    key: string
    requestHash?: string | null
    responseBody?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type IdempotencyKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    merchant?: MerchantUpdateOneRequiredWithoutIdempotencyKeysNestedInput
  }

  export type IdempotencyKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyCreateManyInput = {
    id?: string
    merchantId: string
    key: string
    requestHash?: string | null
    responseBody?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type IdempotencyKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefundCreateInput = {
    id?: string
    amountPaise: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
    payment: PaymentCreateNestedOneWithoutRefundsInput
  }

  export type RefundUncheckedCreateInput = {
    id?: string
    paymentId: string
    amountPaise: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type RefundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: PaymentUpdateOneRequiredWithoutRefundsNestedInput
  }

  export type RefundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundCreateManyInput = {
    id?: string
    paymentId: string
    amountPaise: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type RefundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChargebackCreateInput = {
    id?: string
    amountPaise: number
    reason?: string | null
    status?: string
    createdAt?: Date | string
    payment: PaymentCreateNestedOneWithoutChargebacksInput
  }

  export type ChargebackUncheckedCreateInput = {
    id?: string
    paymentId: string
    amountPaise: number
    reason?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ChargebackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutChargebacksNestedInput
  }

  export type ChargebackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargebackCreateManyInput = {
    id?: string
    paymentId: string
    amountPaise: number
    reason?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ChargebackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargebackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentStateTransitionCreateInput = {
    id?: string
    fromStatus: string
    toStatus: string
    reason?: string | null
    timestamp?: Date | string
    actor?: string
    payment: PaymentCreateNestedOneWithoutTransitionsInput
  }

  export type PaymentStateTransitionUncheckedCreateInput = {
    id?: string
    paymentId: string
    fromStatus: string
    toStatus: string
    reason?: string | null
    timestamp?: Date | string
    actor?: string
  }

  export type PaymentStateTransitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUpdateOneRequiredWithoutTransitionsNestedInput
  }

  export type PaymentStateTransitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentStateTransitionCreateManyInput = {
    id?: string
    paymentId: string
    fromStatus: string
    toStatus: string
    reason?: string | null
    timestamp?: Date | string
    actor?: string
  }

  export type PaymentStateTransitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentStateTransitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumMerchantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMerchantStatusFilter<$PrismaModel> | $Enums.MerchantStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type ApiLogListRelationFilter = {
    every?: ApiLogWhereInput
    some?: ApiLogWhereInput
    none?: ApiLogWhereInput
  }

  export type IdempotencyKeyListRelationFilter = {
    every?: IdempotencyKeyWhereInput
    some?: IdempotencyKeyWhereInput
    none?: IdempotencyKeyWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type WebhookListRelationFilter = {
    every?: WebhookWhereInput
    some?: WebhookWhereInput
    none?: WebhookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdempotencyKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MerchantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    otpCode?: SortOrder
    otpExpiry?: SortOrder
    passwordHash?: SortOrder
    secretKey?: SortOrder
  }

  export type MerchantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    otpCode?: SortOrder
    otpExpiry?: SortOrder
    passwordHash?: SortOrder
    secretKey?: SortOrder
  }

  export type MerchantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    businessName?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    otpCode?: SortOrder
    otpExpiry?: SortOrder
    passwordHash?: SortOrder
    secretKey?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumMerchantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMerchantStatusWithAggregatesFilter<$PrismaModel> | $Enums.MerchantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMerchantStatusFilter<$PrismaModel>
    _max?: NestedEnumMerchantStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type MerchantScalarRelationFilter = {
    is?: MerchantWhereInput
    isNot?: MerchantWhereInput
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    secretKey?: SortOrder
    name?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    secretKey?: SortOrder
    name?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    publicKey?: SortOrder
    secretKeyHash?: SortOrder
    environment?: SortOrder
    createdAt?: SortOrder
    revokedAt?: SortOrder
    lastUsedAt?: SortOrder
    secretKey?: SortOrder
    name?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WebhookCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    events?: SortOrder
    secret?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ApiLogCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    requestBody?: SortOrder
    responseBody?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiLogAvgOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type ApiLogMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    requestBody?: SortOrder
    responseBody?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiLogMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    endpoint?: SortOrder
    method?: SortOrder
    statusCode?: SortOrder
    requestBody?: SortOrder
    responseBody?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiLogSumOrderByAggregateInput = {
    statusCode?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type LedgerEntriesListRelationFilter = {
    every?: LedgerEntriesWhereInput
    some?: LedgerEntriesWhereInput
    none?: LedgerEntriesWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerEntriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    upiId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    transactionPinHash?: SortOrder
    failedPinAttempts?: SortOrder
    lockedUntil?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    failedPinAttempts?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    upiId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    transactionPinHash?: SortOrder
    failedPinAttempts?: SortOrder
    lockedUntil?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    upiId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    passwordHash?: SortOrder
    transactionPinHash?: SortOrder
    failedPinAttempts?: SortOrder
    lockedUntil?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    failedPinAttempts?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    cvvHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    cvvHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardNumber?: SortOrder
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
    cvvHash?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    expiryMonth?: SortOrder
    expiryYear?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    receipt?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    receipt?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    amountPaise?: SortOrder
    currency?: SortOrder
    receipt?: SortOrder
    status?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ChargebackListRelationFilter = {
    every?: ChargebackWhereInput
    some?: ChargebackWhereInput
    none?: ChargebackWhereInput
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PaymentStateTransitionListRelationFilter = {
    every?: PaymentStateTransitionWhereInput
    some?: PaymentStateTransitionWhereInput
    none?: PaymentStateTransitionWhereInput
  }

  export type RefundListRelationFilter = {
    every?: RefundWhereInput
    some?: RefundWhereInput
    none?: RefundWhereInput
  }

  export type ChargebackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentStateTransitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amountPaise?: SortOrder
    riskScore?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorizationId?: SortOrder
    capturedAt?: SortOrder
    failedReason?: SortOrder
    refundedPaise?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amountPaise?: SortOrder
    riskScore?: SortOrder
    refundedPaise?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amountPaise?: SortOrder
    riskScore?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorizationId?: SortOrder
    capturedAt?: SortOrder
    failedReason?: SortOrder
    refundedPaise?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    status?: SortOrder
    amountPaise?: SortOrder
    riskScore?: SortOrder
    signature?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authorizationId?: SortOrder
    capturedAt?: SortOrder
    failedReason?: SortOrder
    refundedPaise?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amountPaise?: SortOrder
    riskScore?: SortOrder
    refundedPaise?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type EnumReferenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferenceType | EnumReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferenceType[] | ListEnumReferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferenceType[] | ListEnumReferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferenceTypeFilter<$PrismaModel> | $Enums.ReferenceType
  }

  export type LedgerEntriesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amountPaise?: SortOrder
    referenceType?: SortOrder
    referenceId?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntriesAvgOrderByAggregateInput = {
    amountPaise?: SortOrder
    balanceAfter?: SortOrder
  }

  export type LedgerEntriesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amountPaise?: SortOrder
    referenceType?: SortOrder
    referenceId?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntriesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amountPaise?: SortOrder
    referenceType?: SortOrder
    referenceId?: SortOrder
    balanceAfter?: SortOrder
    createdAt?: SortOrder
  }

  export type LedgerEntriesSumOrderByAggregateInput = {
    amountPaise?: SortOrder
    balanceAfter?: SortOrder
  }

  export type EnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type EnumReferenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferenceType | EnumReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferenceType[] | ListEnumReferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferenceType[] | ListEnumReferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReferenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferenceTypeFilter<$PrismaModel>
    _max?: NestedEnumReferenceTypeFilter<$PrismaModel>
  }

  export type WebhookDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    eventId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    url?: SortOrder
    signature?: SortOrder
    timestamp?: SortOrder
    nextRetryAt?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookDeliveryAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type WebhookDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    eventId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    url?: SortOrder
    signature?: SortOrder
    timestamp?: SortOrder
    nextRetryAt?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    eventId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    url?: SortOrder
    signature?: SortOrder
    timestamp?: SortOrder
    nextRetryAt?: SortOrder
    lastError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookDeliverySumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type IdempotencyKeyMerchantIdKeyCompoundUniqueInput = {
    merchantId: string
    key: string
  }

  export type IdempotencyKeyCountOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    key?: SortOrder
    requestHash?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    key?: SortOrder
    requestHash?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type IdempotencyKeyMinOrderByAggregateInput = {
    id?: SortOrder
    merchantId?: SortOrder
    key?: SortOrder
    requestHash?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type RefundCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type RefundAvgOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type RefundMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type RefundMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    processedAt?: SortOrder
  }

  export type RefundSumOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type ChargebackCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargebackAvgOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type ChargebackMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargebackMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    amountPaise?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChargebackSumOrderByAggregateInput = {
    amountPaise?: SortOrder
  }

  export type PaymentStateTransitionCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
  }

  export type PaymentStateTransitionMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
  }

  export type PaymentStateTransitionMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
    actor?: SortOrder
  }

  export type ApiKeyCreateNestedManyWithoutMerchantInput = {
    create?: XOR<ApiKeyCreateWithoutMerchantInput, ApiKeyUncheckedCreateWithoutMerchantInput> | ApiKeyCreateWithoutMerchantInput[] | ApiKeyUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutMerchantInput | ApiKeyCreateOrConnectWithoutMerchantInput[]
    createMany?: ApiKeyCreateManyMerchantInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ApiLogCreateNestedManyWithoutMerchantInput = {
    create?: XOR<ApiLogCreateWithoutMerchantInput, ApiLogUncheckedCreateWithoutMerchantInput> | ApiLogCreateWithoutMerchantInput[] | ApiLogUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ApiLogCreateOrConnectWithoutMerchantInput | ApiLogCreateOrConnectWithoutMerchantInput[]
    createMany?: ApiLogCreateManyMerchantInputEnvelope
    connect?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
  }

  export type IdempotencyKeyCreateNestedManyWithoutMerchantInput = {
    create?: XOR<IdempotencyKeyCreateWithoutMerchantInput, IdempotencyKeyUncheckedCreateWithoutMerchantInput> | IdempotencyKeyCreateWithoutMerchantInput[] | IdempotencyKeyUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: IdempotencyKeyCreateOrConnectWithoutMerchantInput | IdempotencyKeyCreateOrConnectWithoutMerchantInput[]
    createMany?: IdempotencyKeyCreateManyMerchantInputEnvelope
    connect?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutMerchantInput = {
    create?: XOR<OrderCreateWithoutMerchantInput, OrderUncheckedCreateWithoutMerchantInput> | OrderCreateWithoutMerchantInput[] | OrderUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMerchantInput | OrderCreateOrConnectWithoutMerchantInput[]
    createMany?: OrderCreateManyMerchantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WebhookCreateNestedManyWithoutMerchantInput = {
    create?: XOR<WebhookCreateWithoutMerchantInput, WebhookUncheckedCreateWithoutMerchantInput> | WebhookCreateWithoutMerchantInput[] | WebhookUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: WebhookCreateOrConnectWithoutMerchantInput | WebhookCreateOrConnectWithoutMerchantInput[]
    createMany?: WebhookCreateManyMerchantInputEnvelope
    connect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<ApiKeyCreateWithoutMerchantInput, ApiKeyUncheckedCreateWithoutMerchantInput> | ApiKeyCreateWithoutMerchantInput[] | ApiKeyUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutMerchantInput | ApiKeyCreateOrConnectWithoutMerchantInput[]
    createMany?: ApiKeyCreateManyMerchantInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type ApiLogUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<ApiLogCreateWithoutMerchantInput, ApiLogUncheckedCreateWithoutMerchantInput> | ApiLogCreateWithoutMerchantInput[] | ApiLogUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ApiLogCreateOrConnectWithoutMerchantInput | ApiLogCreateOrConnectWithoutMerchantInput[]
    createMany?: ApiLogCreateManyMerchantInputEnvelope
    connect?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
  }

  export type IdempotencyKeyUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<IdempotencyKeyCreateWithoutMerchantInput, IdempotencyKeyUncheckedCreateWithoutMerchantInput> | IdempotencyKeyCreateWithoutMerchantInput[] | IdempotencyKeyUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: IdempotencyKeyCreateOrConnectWithoutMerchantInput | IdempotencyKeyCreateOrConnectWithoutMerchantInput[]
    createMany?: IdempotencyKeyCreateManyMerchantInputEnvelope
    connect?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<OrderCreateWithoutMerchantInput, OrderUncheckedCreateWithoutMerchantInput> | OrderCreateWithoutMerchantInput[] | OrderUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMerchantInput | OrderCreateOrConnectWithoutMerchantInput[]
    createMany?: OrderCreateManyMerchantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type WebhookUncheckedCreateNestedManyWithoutMerchantInput = {
    create?: XOR<WebhookCreateWithoutMerchantInput, WebhookUncheckedCreateWithoutMerchantInput> | WebhookCreateWithoutMerchantInput[] | WebhookUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: WebhookCreateOrConnectWithoutMerchantInput | WebhookCreateOrConnectWithoutMerchantInput[]
    createMany?: WebhookCreateManyMerchantInputEnvelope
    connect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumMerchantStatusFieldUpdateOperationsInput = {
    set?: $Enums.MerchantStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApiKeyUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<ApiKeyCreateWithoutMerchantInput, ApiKeyUncheckedCreateWithoutMerchantInput> | ApiKeyCreateWithoutMerchantInput[] | ApiKeyUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutMerchantInput | ApiKeyCreateOrConnectWithoutMerchantInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutMerchantInput | ApiKeyUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: ApiKeyCreateManyMerchantInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutMerchantInput | ApiKeyUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutMerchantInput | ApiKeyUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ApiLogUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<ApiLogCreateWithoutMerchantInput, ApiLogUncheckedCreateWithoutMerchantInput> | ApiLogCreateWithoutMerchantInput[] | ApiLogUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ApiLogCreateOrConnectWithoutMerchantInput | ApiLogCreateOrConnectWithoutMerchantInput[]
    upsert?: ApiLogUpsertWithWhereUniqueWithoutMerchantInput | ApiLogUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: ApiLogCreateManyMerchantInputEnvelope
    set?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
    disconnect?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
    delete?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
    connect?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
    update?: ApiLogUpdateWithWhereUniqueWithoutMerchantInput | ApiLogUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: ApiLogUpdateManyWithWhereWithoutMerchantInput | ApiLogUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: ApiLogScalarWhereInput | ApiLogScalarWhereInput[]
  }

  export type IdempotencyKeyUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<IdempotencyKeyCreateWithoutMerchantInput, IdempotencyKeyUncheckedCreateWithoutMerchantInput> | IdempotencyKeyCreateWithoutMerchantInput[] | IdempotencyKeyUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: IdempotencyKeyCreateOrConnectWithoutMerchantInput | IdempotencyKeyCreateOrConnectWithoutMerchantInput[]
    upsert?: IdempotencyKeyUpsertWithWhereUniqueWithoutMerchantInput | IdempotencyKeyUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: IdempotencyKeyCreateManyMerchantInputEnvelope
    set?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
    disconnect?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
    delete?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
    connect?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
    update?: IdempotencyKeyUpdateWithWhereUniqueWithoutMerchantInput | IdempotencyKeyUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: IdempotencyKeyUpdateManyWithWhereWithoutMerchantInput | IdempotencyKeyUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: IdempotencyKeyScalarWhereInput | IdempotencyKeyScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<OrderCreateWithoutMerchantInput, OrderUncheckedCreateWithoutMerchantInput> | OrderCreateWithoutMerchantInput[] | OrderUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMerchantInput | OrderCreateOrConnectWithoutMerchantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMerchantInput | OrderUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: OrderCreateManyMerchantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMerchantInput | OrderUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMerchantInput | OrderUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WebhookUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<WebhookCreateWithoutMerchantInput, WebhookUncheckedCreateWithoutMerchantInput> | WebhookCreateWithoutMerchantInput[] | WebhookUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: WebhookCreateOrConnectWithoutMerchantInput | WebhookCreateOrConnectWithoutMerchantInput[]
    upsert?: WebhookUpsertWithWhereUniqueWithoutMerchantInput | WebhookUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: WebhookCreateManyMerchantInputEnvelope
    set?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    disconnect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    delete?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    connect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    update?: WebhookUpdateWithWhereUniqueWithoutMerchantInput | WebhookUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: WebhookUpdateManyWithWhereWithoutMerchantInput | WebhookUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: WebhookScalarWhereInput | WebhookScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<ApiKeyCreateWithoutMerchantInput, ApiKeyUncheckedCreateWithoutMerchantInput> | ApiKeyCreateWithoutMerchantInput[] | ApiKeyUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutMerchantInput | ApiKeyCreateOrConnectWithoutMerchantInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutMerchantInput | ApiKeyUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: ApiKeyCreateManyMerchantInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutMerchantInput | ApiKeyUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutMerchantInput | ApiKeyUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type ApiLogUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<ApiLogCreateWithoutMerchantInput, ApiLogUncheckedCreateWithoutMerchantInput> | ApiLogCreateWithoutMerchantInput[] | ApiLogUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: ApiLogCreateOrConnectWithoutMerchantInput | ApiLogCreateOrConnectWithoutMerchantInput[]
    upsert?: ApiLogUpsertWithWhereUniqueWithoutMerchantInput | ApiLogUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: ApiLogCreateManyMerchantInputEnvelope
    set?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
    disconnect?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
    delete?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
    connect?: ApiLogWhereUniqueInput | ApiLogWhereUniqueInput[]
    update?: ApiLogUpdateWithWhereUniqueWithoutMerchantInput | ApiLogUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: ApiLogUpdateManyWithWhereWithoutMerchantInput | ApiLogUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: ApiLogScalarWhereInput | ApiLogScalarWhereInput[]
  }

  export type IdempotencyKeyUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<IdempotencyKeyCreateWithoutMerchantInput, IdempotencyKeyUncheckedCreateWithoutMerchantInput> | IdempotencyKeyCreateWithoutMerchantInput[] | IdempotencyKeyUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: IdempotencyKeyCreateOrConnectWithoutMerchantInput | IdempotencyKeyCreateOrConnectWithoutMerchantInput[]
    upsert?: IdempotencyKeyUpsertWithWhereUniqueWithoutMerchantInput | IdempotencyKeyUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: IdempotencyKeyCreateManyMerchantInputEnvelope
    set?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
    disconnect?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
    delete?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
    connect?: IdempotencyKeyWhereUniqueInput | IdempotencyKeyWhereUniqueInput[]
    update?: IdempotencyKeyUpdateWithWhereUniqueWithoutMerchantInput | IdempotencyKeyUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: IdempotencyKeyUpdateManyWithWhereWithoutMerchantInput | IdempotencyKeyUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: IdempotencyKeyScalarWhereInput | IdempotencyKeyScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<OrderCreateWithoutMerchantInput, OrderUncheckedCreateWithoutMerchantInput> | OrderCreateWithoutMerchantInput[] | OrderUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutMerchantInput | OrderCreateOrConnectWithoutMerchantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutMerchantInput | OrderUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: OrderCreateManyMerchantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutMerchantInput | OrderUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutMerchantInput | OrderUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type WebhookUncheckedUpdateManyWithoutMerchantNestedInput = {
    create?: XOR<WebhookCreateWithoutMerchantInput, WebhookUncheckedCreateWithoutMerchantInput> | WebhookCreateWithoutMerchantInput[] | WebhookUncheckedCreateWithoutMerchantInput[]
    connectOrCreate?: WebhookCreateOrConnectWithoutMerchantInput | WebhookCreateOrConnectWithoutMerchantInput[]
    upsert?: WebhookUpsertWithWhereUniqueWithoutMerchantInput | WebhookUpsertWithWhereUniqueWithoutMerchantInput[]
    createMany?: WebhookCreateManyMerchantInputEnvelope
    set?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    disconnect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    delete?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    connect?: WebhookWhereUniqueInput | WebhookWhereUniqueInput[]
    update?: WebhookUpdateWithWhereUniqueWithoutMerchantInput | WebhookUpdateWithWhereUniqueWithoutMerchantInput[]
    updateMany?: WebhookUpdateManyWithWhereWithoutMerchantInput | WebhookUpdateManyWithWhereWithoutMerchantInput[]
    deleteMany?: WebhookScalarWhereInput | WebhookScalarWhereInput[]
  }

  export type MerchantCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<MerchantCreateWithoutApiKeysInput, MerchantUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutApiKeysInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<MerchantCreateWithoutApiKeysInput, MerchantUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutApiKeysInput
    upsert?: MerchantUpsertWithoutApiKeysInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutApiKeysInput, MerchantUpdateWithoutApiKeysInput>, MerchantUncheckedUpdateWithoutApiKeysInput>
  }

  export type WebhookCreateeventsInput = {
    set: string[]
  }

  export type MerchantCreateNestedOneWithoutWebhooksInput = {
    create?: XOR<MerchantCreateWithoutWebhooksInput, MerchantUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutWebhooksInput
    connect?: MerchantWhereUniqueInput
  }

  export type WebhookUpdateeventsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MerchantUpdateOneRequiredWithoutWebhooksNestedInput = {
    create?: XOR<MerchantCreateWithoutWebhooksInput, MerchantUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutWebhooksInput
    upsert?: MerchantUpsertWithoutWebhooksInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutWebhooksInput, MerchantUpdateWithoutWebhooksInput>, MerchantUncheckedUpdateWithoutWebhooksInput>
  }

  export type MerchantCreateNestedOneWithoutApiLogsInput = {
    create?: XOR<MerchantCreateWithoutApiLogsInput, MerchantUncheckedCreateWithoutApiLogsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutApiLogsInput
    connect?: MerchantWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MerchantUpdateOneRequiredWithoutApiLogsNestedInput = {
    create?: XOR<MerchantCreateWithoutApiLogsInput, MerchantUncheckedCreateWithoutApiLogsInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutApiLogsInput
    upsert?: MerchantUpsertWithoutApiLogsInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutApiLogsInput, MerchantUpdateWithoutApiLogsInput>, MerchantUncheckedUpdateWithoutApiLogsInput>
  }

  export type CardCreateNestedManyWithoutUserInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type LedgerEntriesCreateNestedManyWithoutUserInput = {
    create?: XOR<LedgerEntriesCreateWithoutUserInput, LedgerEntriesUncheckedCreateWithoutUserInput> | LedgerEntriesCreateWithoutUserInput[] | LedgerEntriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LedgerEntriesCreateOrConnectWithoutUserInput | LedgerEntriesCreateOrConnectWithoutUserInput[]
    createMany?: LedgerEntriesCreateManyUserInputEnvelope
    connect?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type LedgerEntriesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LedgerEntriesCreateWithoutUserInput, LedgerEntriesUncheckedCreateWithoutUserInput> | LedgerEntriesCreateWithoutUserInput[] | LedgerEntriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LedgerEntriesCreateOrConnectWithoutUserInput | LedgerEntriesCreateOrConnectWithoutUserInput[]
    createMany?: LedgerEntriesCreateManyUserInputEnvelope
    connect?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CardUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput | CardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutUserInput | CardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardUpdateManyWithWhereWithoutUserInput | CardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type LedgerEntriesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LedgerEntriesCreateWithoutUserInput, LedgerEntriesUncheckedCreateWithoutUserInput> | LedgerEntriesCreateWithoutUserInput[] | LedgerEntriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LedgerEntriesCreateOrConnectWithoutUserInput | LedgerEntriesCreateOrConnectWithoutUserInput[]
    upsert?: LedgerEntriesUpsertWithWhereUniqueWithoutUserInput | LedgerEntriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LedgerEntriesCreateManyUserInputEnvelope
    set?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
    disconnect?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
    delete?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
    connect?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
    update?: LedgerEntriesUpdateWithWhereUniqueWithoutUserInput | LedgerEntriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LedgerEntriesUpdateManyWithWhereWithoutUserInput | LedgerEntriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LedgerEntriesScalarWhereInput | LedgerEntriesScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput> | CardCreateWithoutUserInput[] | CardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CardCreateOrConnectWithoutUserInput | CardCreateOrConnectWithoutUserInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutUserInput | CardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CardCreateManyUserInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutUserInput | CardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CardUpdateManyWithWhereWithoutUserInput | CardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type LedgerEntriesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LedgerEntriesCreateWithoutUserInput, LedgerEntriesUncheckedCreateWithoutUserInput> | LedgerEntriesCreateWithoutUserInput[] | LedgerEntriesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LedgerEntriesCreateOrConnectWithoutUserInput | LedgerEntriesCreateOrConnectWithoutUserInput[]
    upsert?: LedgerEntriesUpsertWithWhereUniqueWithoutUserInput | LedgerEntriesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LedgerEntriesCreateManyUserInputEnvelope
    set?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
    disconnect?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
    delete?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
    connect?: LedgerEntriesWhereUniqueInput | LedgerEntriesWhereUniqueInput[]
    update?: LedgerEntriesUpdateWithWhereUniqueWithoutUserInput | LedgerEntriesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LedgerEntriesUpdateManyWithWhereWithoutUserInput | LedgerEntriesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LedgerEntriesScalarWhereInput | LedgerEntriesScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCardsInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    upsert?: UserUpsertWithoutCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCardsInput, UserUpdateWithoutCardsInput>, UserUncheckedUpdateWithoutCardsInput>
  }

  export type MerchantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<MerchantCreateWithoutOrdersInput, MerchantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutOrdersInput
    connect?: MerchantWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type MerchantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<MerchantCreateWithoutOrdersInput, MerchantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutOrdersInput
    upsert?: MerchantUpsertWithoutOrdersInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutOrdersInput, MerchantUpdateWithoutOrdersInput>, MerchantUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ChargebackCreateNestedManyWithoutPaymentInput = {
    create?: XOR<ChargebackCreateWithoutPaymentInput, ChargebackUncheckedCreateWithoutPaymentInput> | ChargebackCreateWithoutPaymentInput[] | ChargebackUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ChargebackCreateOrConnectWithoutPaymentInput | ChargebackCreateOrConnectWithoutPaymentInput[]
    createMany?: ChargebackCreateManyPaymentInputEnvelope
    connect?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
  }

  export type OrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentStateTransitionCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentStateTransitionCreateWithoutPaymentInput, PaymentStateTransitionUncheckedCreateWithoutPaymentInput> | PaymentStateTransitionCreateWithoutPaymentInput[] | PaymentStateTransitionUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentStateTransitionCreateOrConnectWithoutPaymentInput | PaymentStateTransitionCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentStateTransitionCreateManyPaymentInputEnvelope
    connect?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
  }

  export type RefundCreateNestedManyWithoutPaymentInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
  }

  export type ChargebackUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<ChargebackCreateWithoutPaymentInput, ChargebackUncheckedCreateWithoutPaymentInput> | ChargebackCreateWithoutPaymentInput[] | ChargebackUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ChargebackCreateOrConnectWithoutPaymentInput | ChargebackCreateOrConnectWithoutPaymentInput[]
    createMany?: ChargebackCreateManyPaymentInputEnvelope
    connect?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
  }

  export type PaymentStateTransitionUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<PaymentStateTransitionCreateWithoutPaymentInput, PaymentStateTransitionUncheckedCreateWithoutPaymentInput> | PaymentStateTransitionCreateWithoutPaymentInput[] | PaymentStateTransitionUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentStateTransitionCreateOrConnectWithoutPaymentInput | PaymentStateTransitionCreateOrConnectWithoutPaymentInput[]
    createMany?: PaymentStateTransitionCreateManyPaymentInputEnvelope
    connect?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
  }

  export type RefundUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChargebackUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<ChargebackCreateWithoutPaymentInput, ChargebackUncheckedCreateWithoutPaymentInput> | ChargebackCreateWithoutPaymentInput[] | ChargebackUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ChargebackCreateOrConnectWithoutPaymentInput | ChargebackCreateOrConnectWithoutPaymentInput[]
    upsert?: ChargebackUpsertWithWhereUniqueWithoutPaymentInput | ChargebackUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: ChargebackCreateManyPaymentInputEnvelope
    set?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
    disconnect?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
    delete?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
    connect?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
    update?: ChargebackUpdateWithWhereUniqueWithoutPaymentInput | ChargebackUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: ChargebackUpdateManyWithWhereWithoutPaymentInput | ChargebackUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: ChargebackScalarWhereInput | ChargebackScalarWhereInput[]
  }

  export type OrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    upsert?: OrderUpsertWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentsInput, OrderUpdateWithoutPaymentsInput>, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type PaymentStateTransitionUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentStateTransitionCreateWithoutPaymentInput, PaymentStateTransitionUncheckedCreateWithoutPaymentInput> | PaymentStateTransitionCreateWithoutPaymentInput[] | PaymentStateTransitionUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentStateTransitionCreateOrConnectWithoutPaymentInput | PaymentStateTransitionCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentStateTransitionUpsertWithWhereUniqueWithoutPaymentInput | PaymentStateTransitionUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentStateTransitionCreateManyPaymentInputEnvelope
    set?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
    disconnect?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
    delete?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
    connect?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
    update?: PaymentStateTransitionUpdateWithWhereUniqueWithoutPaymentInput | PaymentStateTransitionUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentStateTransitionUpdateManyWithWhereWithoutPaymentInput | PaymentStateTransitionUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentStateTransitionScalarWhereInput | PaymentStateTransitionScalarWhereInput[]
  }

  export type RefundUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    upsert?: RefundUpsertWithWhereUniqueWithoutPaymentInput | RefundUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    set?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    disconnect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    delete?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    update?: RefundUpdateWithWhereUniqueWithoutPaymentInput | RefundUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: RefundUpdateManyWithWhereWithoutPaymentInput | RefundUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: RefundScalarWhereInput | RefundScalarWhereInput[]
  }

  export type ChargebackUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<ChargebackCreateWithoutPaymentInput, ChargebackUncheckedCreateWithoutPaymentInput> | ChargebackCreateWithoutPaymentInput[] | ChargebackUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: ChargebackCreateOrConnectWithoutPaymentInput | ChargebackCreateOrConnectWithoutPaymentInput[]
    upsert?: ChargebackUpsertWithWhereUniqueWithoutPaymentInput | ChargebackUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: ChargebackCreateManyPaymentInputEnvelope
    set?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
    disconnect?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
    delete?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
    connect?: ChargebackWhereUniqueInput | ChargebackWhereUniqueInput[]
    update?: ChargebackUpdateWithWhereUniqueWithoutPaymentInput | ChargebackUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: ChargebackUpdateManyWithWhereWithoutPaymentInput | ChargebackUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: ChargebackScalarWhereInput | ChargebackScalarWhereInput[]
  }

  export type PaymentStateTransitionUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<PaymentStateTransitionCreateWithoutPaymentInput, PaymentStateTransitionUncheckedCreateWithoutPaymentInput> | PaymentStateTransitionCreateWithoutPaymentInput[] | PaymentStateTransitionUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: PaymentStateTransitionCreateOrConnectWithoutPaymentInput | PaymentStateTransitionCreateOrConnectWithoutPaymentInput[]
    upsert?: PaymentStateTransitionUpsertWithWhereUniqueWithoutPaymentInput | PaymentStateTransitionUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: PaymentStateTransitionCreateManyPaymentInputEnvelope
    set?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
    disconnect?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
    delete?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
    connect?: PaymentStateTransitionWhereUniqueInput | PaymentStateTransitionWhereUniqueInput[]
    update?: PaymentStateTransitionUpdateWithWhereUniqueWithoutPaymentInput | PaymentStateTransitionUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: PaymentStateTransitionUpdateManyWithWhereWithoutPaymentInput | PaymentStateTransitionUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: PaymentStateTransitionScalarWhereInput | PaymentStateTransitionScalarWhereInput[]
  }

  export type RefundUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput> | RefundCreateWithoutPaymentInput[] | RefundUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: RefundCreateOrConnectWithoutPaymentInput | RefundCreateOrConnectWithoutPaymentInput[]
    upsert?: RefundUpsertWithWhereUniqueWithoutPaymentInput | RefundUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: RefundCreateManyPaymentInputEnvelope
    set?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    disconnect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    delete?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    connect?: RefundWhereUniqueInput | RefundWhereUniqueInput[]
    update?: RefundUpdateWithWhereUniqueWithoutPaymentInput | RefundUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: RefundUpdateManyWithWhereWithoutPaymentInput | RefundUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: RefundScalarWhereInput | RefundScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLedgerEntriesInput = {
    create?: XOR<UserCreateWithoutLedgerEntriesInput, UserUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedgerEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLedgerTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerType
  }

  export type EnumReferenceTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReferenceType
  }

  export type UserUpdateOneRequiredWithoutLedgerEntriesNestedInput = {
    create?: XOR<UserCreateWithoutLedgerEntriesInput, UserUncheckedCreateWithoutLedgerEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLedgerEntriesInput
    upsert?: UserUpsertWithoutLedgerEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLedgerEntriesInput, UserUpdateWithoutLedgerEntriesInput>, UserUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type MerchantCreateNestedOneWithoutIdempotencyKeysInput = {
    create?: XOR<MerchantCreateWithoutIdempotencyKeysInput, MerchantUncheckedCreateWithoutIdempotencyKeysInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutIdempotencyKeysInput
    connect?: MerchantWhereUniqueInput
  }

  export type MerchantUpdateOneRequiredWithoutIdempotencyKeysNestedInput = {
    create?: XOR<MerchantCreateWithoutIdempotencyKeysInput, MerchantUncheckedCreateWithoutIdempotencyKeysInput>
    connectOrCreate?: MerchantCreateOrConnectWithoutIdempotencyKeysInput
    upsert?: MerchantUpsertWithoutIdempotencyKeysInput
    connect?: MerchantWhereUniqueInput
    update?: XOR<XOR<MerchantUpdateToOneWithWhereWithoutIdempotencyKeysInput, MerchantUpdateWithoutIdempotencyKeysInput>, MerchantUncheckedUpdateWithoutIdempotencyKeysInput>
  }

  export type PaymentCreateNestedOneWithoutRefundsInput = {
    create?: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRefundsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutRefundsNestedInput = {
    create?: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutRefundsInput
    upsert?: PaymentUpsertWithoutRefundsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutRefundsInput, PaymentUpdateWithoutRefundsInput>, PaymentUncheckedUpdateWithoutRefundsInput>
  }

  export type PaymentCreateNestedOneWithoutChargebacksInput = {
    create?: XOR<PaymentCreateWithoutChargebacksInput, PaymentUncheckedCreateWithoutChargebacksInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutChargebacksInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutChargebacksNestedInput = {
    create?: XOR<PaymentCreateWithoutChargebacksInput, PaymentUncheckedCreateWithoutChargebacksInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutChargebacksInput
    upsert?: PaymentUpsertWithoutChargebacksInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutChargebacksInput, PaymentUpdateWithoutChargebacksInput>, PaymentUncheckedUpdateWithoutChargebacksInput>
  }

  export type PaymentCreateNestedOneWithoutTransitionsInput = {
    create?: XOR<PaymentCreateWithoutTransitionsInput, PaymentUncheckedCreateWithoutTransitionsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTransitionsInput
    connect?: PaymentWhereUniqueInput
  }

  export type PaymentUpdateOneRequiredWithoutTransitionsNestedInput = {
    create?: XOR<PaymentCreateWithoutTransitionsInput, PaymentUncheckedCreateWithoutTransitionsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTransitionsInput
    upsert?: PaymentUpsertWithoutTransitionsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTransitionsInput, PaymentUpdateWithoutTransitionsInput>, PaymentUncheckedUpdateWithoutTransitionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumMerchantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMerchantStatusFilter<$PrismaModel> | $Enums.MerchantStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumMerchantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MerchantStatus | EnumMerchantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MerchantStatus[] | ListEnumMerchantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMerchantStatusWithAggregatesFilter<$PrismaModel> | $Enums.MerchantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMerchantStatusFilter<$PrismaModel>
    _max?: NestedEnumMerchantStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type NestedEnumReferenceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferenceType | EnumReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferenceType[] | ListEnumReferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferenceType[] | ListEnumReferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferenceTypeFilter<$PrismaModel> | $Enums.ReferenceType
  }

  export type NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type NestedEnumReferenceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReferenceType | EnumReferenceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReferenceType[] | ListEnumReferenceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReferenceType[] | ListEnumReferenceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReferenceTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReferenceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReferenceTypeFilter<$PrismaModel>
    _max?: NestedEnumReferenceTypeFilter<$PrismaModel>
  }

  export type ApiKeyCreateWithoutMerchantInput = {
    id?: string
    publicKey: string
    secretKeyHash: string
    environment?: string
    createdAt?: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    secretKey?: string | null
    name?: string
  }

  export type ApiKeyUncheckedCreateWithoutMerchantInput = {
    id?: string
    publicKey: string
    secretKeyHash: string
    environment?: string
    createdAt?: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    secretKey?: string | null
    name?: string
  }

  export type ApiKeyCreateOrConnectWithoutMerchantInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutMerchantInput, ApiKeyUncheckedCreateWithoutMerchantInput>
  }

  export type ApiKeyCreateManyMerchantInputEnvelope = {
    data: ApiKeyCreateManyMerchantInput | ApiKeyCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type ApiLogCreateWithoutMerchantInput = {
    id?: string
    endpoint: string
    method: string
    statusCode: number
    requestBody?: string | null
    responseBody?: string | null
    createdAt?: Date | string
  }

  export type ApiLogUncheckedCreateWithoutMerchantInput = {
    id?: string
    endpoint: string
    method: string
    statusCode: number
    requestBody?: string | null
    responseBody?: string | null
    createdAt?: Date | string
  }

  export type ApiLogCreateOrConnectWithoutMerchantInput = {
    where: ApiLogWhereUniqueInput
    create: XOR<ApiLogCreateWithoutMerchantInput, ApiLogUncheckedCreateWithoutMerchantInput>
  }

  export type ApiLogCreateManyMerchantInputEnvelope = {
    data: ApiLogCreateManyMerchantInput | ApiLogCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type IdempotencyKeyCreateWithoutMerchantInput = {
    id?: string
    key: string
    requestHash?: string | null
    responseBody?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type IdempotencyKeyUncheckedCreateWithoutMerchantInput = {
    id?: string
    key: string
    requestHash?: string | null
    responseBody?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type IdempotencyKeyCreateOrConnectWithoutMerchantInput = {
    where: IdempotencyKeyWhereUniqueInput
    create: XOR<IdempotencyKeyCreateWithoutMerchantInput, IdempotencyKeyUncheckedCreateWithoutMerchantInput>
  }

  export type IdempotencyKeyCreateManyMerchantInputEnvelope = {
    data: IdempotencyKeyCreateManyMerchantInput | IdempotencyKeyCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutMerchantInput = {
    id?: string
    amountPaise: number
    currency?: string
    receipt?: string | null
    status?: $Enums.OrderStatus
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutMerchantInput = {
    id?: string
    amountPaise: number
    currency?: string
    receipt?: string | null
    status?: $Enums.OrderStatus
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutMerchantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutMerchantInput, OrderUncheckedCreateWithoutMerchantInput>
  }

  export type OrderCreateManyMerchantInputEnvelope = {
    data: OrderCreateManyMerchantInput | OrderCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type WebhookCreateWithoutMerchantInput = {
    id?: string
    url: string
    events?: WebhookCreateeventsInput | string[]
    secret: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookUncheckedCreateWithoutMerchantInput = {
    id?: string
    url: string
    events?: WebhookCreateeventsInput | string[]
    secret: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookCreateOrConnectWithoutMerchantInput = {
    where: WebhookWhereUniqueInput
    create: XOR<WebhookCreateWithoutMerchantInput, WebhookUncheckedCreateWithoutMerchantInput>
  }

  export type WebhookCreateManyMerchantInputEnvelope = {
    data: WebhookCreateManyMerchantInput | WebhookCreateManyMerchantInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutMerchantInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutMerchantInput, ApiKeyUncheckedUpdateWithoutMerchantInput>
    create: XOR<ApiKeyCreateWithoutMerchantInput, ApiKeyUncheckedCreateWithoutMerchantInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutMerchantInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutMerchantInput, ApiKeyUncheckedUpdateWithoutMerchantInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutMerchantInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutMerchantInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    merchantId?: StringFilter<"ApiKey"> | string
    publicKey?: StringFilter<"ApiKey"> | string
    secretKeyHash?: StringFilter<"ApiKey"> | string
    environment?: StringFilter<"ApiKey"> | string
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    revokedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    secretKey?: StringNullableFilter<"ApiKey"> | string | null
    name?: StringFilter<"ApiKey"> | string
  }

  export type ApiLogUpsertWithWhereUniqueWithoutMerchantInput = {
    where: ApiLogWhereUniqueInput
    update: XOR<ApiLogUpdateWithoutMerchantInput, ApiLogUncheckedUpdateWithoutMerchantInput>
    create: XOR<ApiLogCreateWithoutMerchantInput, ApiLogUncheckedCreateWithoutMerchantInput>
  }

  export type ApiLogUpdateWithWhereUniqueWithoutMerchantInput = {
    where: ApiLogWhereUniqueInput
    data: XOR<ApiLogUpdateWithoutMerchantInput, ApiLogUncheckedUpdateWithoutMerchantInput>
  }

  export type ApiLogUpdateManyWithWhereWithoutMerchantInput = {
    where: ApiLogScalarWhereInput
    data: XOR<ApiLogUpdateManyMutationInput, ApiLogUncheckedUpdateManyWithoutMerchantInput>
  }

  export type ApiLogScalarWhereInput = {
    AND?: ApiLogScalarWhereInput | ApiLogScalarWhereInput[]
    OR?: ApiLogScalarWhereInput[]
    NOT?: ApiLogScalarWhereInput | ApiLogScalarWhereInput[]
    id?: StringFilter<"ApiLog"> | string
    merchantId?: StringFilter<"ApiLog"> | string
    endpoint?: StringFilter<"ApiLog"> | string
    method?: StringFilter<"ApiLog"> | string
    statusCode?: IntFilter<"ApiLog"> | number
    requestBody?: StringNullableFilter<"ApiLog"> | string | null
    responseBody?: StringNullableFilter<"ApiLog"> | string | null
    createdAt?: DateTimeFilter<"ApiLog"> | Date | string
  }

  export type IdempotencyKeyUpsertWithWhereUniqueWithoutMerchantInput = {
    where: IdempotencyKeyWhereUniqueInput
    update: XOR<IdempotencyKeyUpdateWithoutMerchantInput, IdempotencyKeyUncheckedUpdateWithoutMerchantInput>
    create: XOR<IdempotencyKeyCreateWithoutMerchantInput, IdempotencyKeyUncheckedCreateWithoutMerchantInput>
  }

  export type IdempotencyKeyUpdateWithWhereUniqueWithoutMerchantInput = {
    where: IdempotencyKeyWhereUniqueInput
    data: XOR<IdempotencyKeyUpdateWithoutMerchantInput, IdempotencyKeyUncheckedUpdateWithoutMerchantInput>
  }

  export type IdempotencyKeyUpdateManyWithWhereWithoutMerchantInput = {
    where: IdempotencyKeyScalarWhereInput
    data: XOR<IdempotencyKeyUpdateManyMutationInput, IdempotencyKeyUncheckedUpdateManyWithoutMerchantInput>
  }

  export type IdempotencyKeyScalarWhereInput = {
    AND?: IdempotencyKeyScalarWhereInput | IdempotencyKeyScalarWhereInput[]
    OR?: IdempotencyKeyScalarWhereInput[]
    NOT?: IdempotencyKeyScalarWhereInput | IdempotencyKeyScalarWhereInput[]
    id?: StringFilter<"IdempotencyKey"> | string
    merchantId?: StringFilter<"IdempotencyKey"> | string
    key?: StringFilter<"IdempotencyKey"> | string
    requestHash?: StringNullableFilter<"IdempotencyKey"> | string | null
    responseBody?: StringNullableFilter<"IdempotencyKey"> | string | null
    status?: StringFilter<"IdempotencyKey"> | string
    createdAt?: DateTimeFilter<"IdempotencyKey"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutMerchantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutMerchantInput, OrderUncheckedUpdateWithoutMerchantInput>
    create: XOR<OrderCreateWithoutMerchantInput, OrderUncheckedCreateWithoutMerchantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutMerchantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutMerchantInput, OrderUncheckedUpdateWithoutMerchantInput>
  }

  export type OrderUpdateManyWithWhereWithoutMerchantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutMerchantInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    merchantId?: StringFilter<"Order"> | string
    amountPaise?: IntFilter<"Order"> | number
    currency?: StringFilter<"Order"> | string
    receipt?: StringNullableFilter<"Order"> | string | null
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    idempotencyKey?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
  }

  export type WebhookUpsertWithWhereUniqueWithoutMerchantInput = {
    where: WebhookWhereUniqueInput
    update: XOR<WebhookUpdateWithoutMerchantInput, WebhookUncheckedUpdateWithoutMerchantInput>
    create: XOR<WebhookCreateWithoutMerchantInput, WebhookUncheckedCreateWithoutMerchantInput>
  }

  export type WebhookUpdateWithWhereUniqueWithoutMerchantInput = {
    where: WebhookWhereUniqueInput
    data: XOR<WebhookUpdateWithoutMerchantInput, WebhookUncheckedUpdateWithoutMerchantInput>
  }

  export type WebhookUpdateManyWithWhereWithoutMerchantInput = {
    where: WebhookScalarWhereInput
    data: XOR<WebhookUpdateManyMutationInput, WebhookUncheckedUpdateManyWithoutMerchantInput>
  }

  export type WebhookScalarWhereInput = {
    AND?: WebhookScalarWhereInput | WebhookScalarWhereInput[]
    OR?: WebhookScalarWhereInput[]
    NOT?: WebhookScalarWhereInput | WebhookScalarWhereInput[]
    id?: StringFilter<"Webhook"> | string
    merchantId?: StringFilter<"Webhook"> | string
    url?: StringFilter<"Webhook"> | string
    events?: StringNullableListFilter<"Webhook">
    secret?: StringFilter<"Webhook"> | string
    status?: StringFilter<"Webhook"> | string
    createdAt?: DateTimeFilter<"Webhook"> | Date | string
    updatedAt?: DateTimeFilter<"Webhook"> | Date | string
  }

  export type MerchantCreateWithoutApiKeysInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiLogs?: ApiLogCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyCreateNestedManyWithoutMerchantInput
    orders?: OrderCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutApiKeysInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiLogs?: ApiLogUncheckedCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrderUncheckedCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutApiKeysInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutApiKeysInput, MerchantUncheckedCreateWithoutApiKeysInput>
  }

  export type MerchantUpsertWithoutApiKeysInput = {
    update: XOR<MerchantUpdateWithoutApiKeysInput, MerchantUncheckedUpdateWithoutApiKeysInput>
    create: XOR<MerchantCreateWithoutApiKeysInput, MerchantUncheckedCreateWithoutApiKeysInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutApiKeysInput, MerchantUncheckedUpdateWithoutApiKeysInput>
  }

  export type MerchantUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiLogs?: ApiLogUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUpdateManyWithoutMerchantNestedInput
    orders?: OrderUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiLogs?: ApiLogUncheckedUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutWebhooksInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyCreateNestedManyWithoutMerchantInput
    apiLogs?: ApiLogCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyCreateNestedManyWithoutMerchantInput
    orders?: OrderCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutWebhooksInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutMerchantInput
    apiLogs?: ApiLogUncheckedCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrderUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutWebhooksInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutWebhooksInput, MerchantUncheckedCreateWithoutWebhooksInput>
  }

  export type MerchantUpsertWithoutWebhooksInput = {
    update: XOR<MerchantUpdateWithoutWebhooksInput, MerchantUncheckedUpdateWithoutWebhooksInput>
    create: XOR<MerchantCreateWithoutWebhooksInput, MerchantUncheckedCreateWithoutWebhooksInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutWebhooksInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutWebhooksInput, MerchantUncheckedUpdateWithoutWebhooksInput>
  }

  export type MerchantUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUpdateManyWithoutMerchantNestedInput
    apiLogs?: ApiLogUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUpdateManyWithoutMerchantNestedInput
    orders?: OrderUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutMerchantNestedInput
    apiLogs?: ApiLogUncheckedUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantCreateWithoutApiLogsInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyCreateNestedManyWithoutMerchantInput
    orders?: OrderCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutApiLogsInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrderUncheckedCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutApiLogsInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutApiLogsInput, MerchantUncheckedCreateWithoutApiLogsInput>
  }

  export type MerchantUpsertWithoutApiLogsInput = {
    update: XOR<MerchantUpdateWithoutApiLogsInput, MerchantUncheckedUpdateWithoutApiLogsInput>
    create: XOR<MerchantCreateWithoutApiLogsInput, MerchantUncheckedCreateWithoutApiLogsInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutApiLogsInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutApiLogsInput, MerchantUncheckedUpdateWithoutApiLogsInput>
  }

  export type MerchantUpdateWithoutApiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUpdateManyWithoutMerchantNestedInput
    orders?: OrderUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutApiLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type CardCreateWithoutUserInput = {
    id?: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    cvvHash: string
    status?: string
    createdAt?: Date | string
  }

  export type CardUncheckedCreateWithoutUserInput = {
    id?: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    cvvHash: string
    status?: string
    createdAt?: Date | string
  }

  export type CardCreateOrConnectWithoutUserInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput>
  }

  export type CardCreateManyUserInputEnvelope = {
    data: CardCreateManyUserInput | CardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LedgerEntriesCreateWithoutUserInput = {
    id?: string
    type: $Enums.LedgerType
    amountPaise: number
    referenceType: $Enums.ReferenceType
    referenceId: string
    balanceAfter: number
    createdAt?: Date | string
  }

  export type LedgerEntriesUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.LedgerType
    amountPaise: number
    referenceType: $Enums.ReferenceType
    referenceId: string
    balanceAfter: number
    createdAt?: Date | string
  }

  export type LedgerEntriesCreateOrConnectWithoutUserInput = {
    where: LedgerEntriesWhereUniqueInput
    create: XOR<LedgerEntriesCreateWithoutUserInput, LedgerEntriesUncheckedCreateWithoutUserInput>
  }

  export type LedgerEntriesCreateManyUserInputEnvelope = {
    data: LedgerEntriesCreateManyUserInput | LedgerEntriesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackCreateNestedManyWithoutPaymentInput
    order: OrderCreateNestedOneWithoutPaymentsInput
    transitions?: PaymentStateTransitionCreateNestedManyWithoutPaymentInput
    refunds?: RefundCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    orderId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackUncheckedCreateNestedManyWithoutPaymentInput
    transitions?: PaymentStateTransitionUncheckedCreateNestedManyWithoutPaymentInput
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CardUpsertWithWhereUniqueWithoutUserInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutUserInput, CardUncheckedUpdateWithoutUserInput>
    create: XOR<CardCreateWithoutUserInput, CardUncheckedCreateWithoutUserInput>
  }

  export type CardUpdateWithWhereUniqueWithoutUserInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutUserInput, CardUncheckedUpdateWithoutUserInput>
  }

  export type CardUpdateManyWithWhereWithoutUserInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutUserInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: StringFilter<"Card"> | string
    userId?: StringFilter<"Card"> | string
    cardNumber?: StringFilter<"Card"> | string
    expiryMonth?: IntFilter<"Card"> | number
    expiryYear?: IntFilter<"Card"> | number
    cvvHash?: StringFilter<"Card"> | string
    status?: StringFilter<"Card"> | string
    createdAt?: DateTimeFilter<"Card"> | Date | string
  }

  export type LedgerEntriesUpsertWithWhereUniqueWithoutUserInput = {
    where: LedgerEntriesWhereUniqueInput
    update: XOR<LedgerEntriesUpdateWithoutUserInput, LedgerEntriesUncheckedUpdateWithoutUserInput>
    create: XOR<LedgerEntriesCreateWithoutUserInput, LedgerEntriesUncheckedCreateWithoutUserInput>
  }

  export type LedgerEntriesUpdateWithWhereUniqueWithoutUserInput = {
    where: LedgerEntriesWhereUniqueInput
    data: XOR<LedgerEntriesUpdateWithoutUserInput, LedgerEntriesUncheckedUpdateWithoutUserInput>
  }

  export type LedgerEntriesUpdateManyWithWhereWithoutUserInput = {
    where: LedgerEntriesScalarWhereInput
    data: XOR<LedgerEntriesUpdateManyMutationInput, LedgerEntriesUncheckedUpdateManyWithoutUserInput>
  }

  export type LedgerEntriesScalarWhereInput = {
    AND?: LedgerEntriesScalarWhereInput | LedgerEntriesScalarWhereInput[]
    OR?: LedgerEntriesScalarWhereInput[]
    NOT?: LedgerEntriesScalarWhereInput | LedgerEntriesScalarWhereInput[]
    id?: StringFilter<"LedgerEntries"> | string
    userId?: StringFilter<"LedgerEntries"> | string
    type?: EnumLedgerTypeFilter<"LedgerEntries"> | $Enums.LedgerType
    amountPaise?: IntFilter<"LedgerEntries"> | number
    referenceType?: EnumReferenceTypeFilter<"LedgerEntries"> | $Enums.ReferenceType
    referenceId?: StringFilter<"LedgerEntries"> | string
    balanceAfter?: IntFilter<"LedgerEntries"> | number
    createdAt?: DateTimeFilter<"LedgerEntries"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    amountPaise?: IntFilter<"Payment"> | number
    riskScore?: FloatNullableFilter<"Payment"> | number | null
    signature?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    authorizationId?: StringNullableFilter<"Payment"> | string | null
    capturedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedReason?: StringNullableFilter<"Payment"> | string | null
    refundedPaise?: IntFilter<"Payment"> | number
  }

  export type UserCreateWithoutCardsInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
    ledgerEntries?: LedgerEntriesCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCardsInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
    ledgerEntries?: LedgerEntriesUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
  }

  export type UserUpsertWithoutCardsInput = {
    update: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
  }

  export type UserUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: LedgerEntriesUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ledgerEntries?: LedgerEntriesUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MerchantCreateWithoutOrdersInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyCreateNestedManyWithoutMerchantInput
    apiLogs?: ApiLogCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutMerchantInput
    apiLogs?: ApiLogUncheckedCreateNestedManyWithoutMerchantInput
    idempotencyKeys?: IdempotencyKeyUncheckedCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutOrdersInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutOrdersInput, MerchantUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackCreateNestedManyWithoutPaymentInput
    user: UserCreateNestedOneWithoutPaymentsInput
    transitions?: PaymentStateTransitionCreateNestedManyWithoutPaymentInput
    refunds?: RefundCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    userId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackUncheckedCreateNestedManyWithoutPaymentInput
    transitions?: PaymentStateTransitionUncheckedCreateNestedManyWithoutPaymentInput
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentCreateManyOrderInputEnvelope = {
    data: PaymentCreateManyOrderInput | PaymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type MerchantUpsertWithoutOrdersInput = {
    update: XOR<MerchantUpdateWithoutOrdersInput, MerchantUncheckedUpdateWithoutOrdersInput>
    create: XOR<MerchantCreateWithoutOrdersInput, MerchantUncheckedCreateWithoutOrdersInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutOrdersInput, MerchantUncheckedUpdateWithoutOrdersInput>
  }

  export type MerchantUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUpdateManyWithoutMerchantNestedInput
    apiLogs?: ApiLogUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutMerchantNestedInput
    apiLogs?: ApiLogUncheckedUpdateManyWithoutMerchantNestedInput
    idempotencyKeys?: IdempotencyKeyUncheckedUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type ChargebackCreateWithoutPaymentInput = {
    id?: string
    amountPaise: number
    reason?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ChargebackUncheckedCreateWithoutPaymentInput = {
    id?: string
    amountPaise: number
    reason?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type ChargebackCreateOrConnectWithoutPaymentInput = {
    where: ChargebackWhereUniqueInput
    create: XOR<ChargebackCreateWithoutPaymentInput, ChargebackUncheckedCreateWithoutPaymentInput>
  }

  export type ChargebackCreateManyPaymentInputEnvelope = {
    data: ChargebackCreateManyPaymentInput | ChargebackCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutPaymentsInput = {
    id?: string
    amountPaise: number
    currency?: string
    receipt?: string | null
    status?: $Enums.OrderStatus
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
    merchant: MerchantCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPaymentsInput = {
    id?: string
    merchantId: string
    amountPaise: number
    currency?: string
    receipt?: string | null
    status?: $Enums.OrderStatus
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type OrderCreateOrConnectWithoutPaymentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
    cards?: CardCreateNestedManyWithoutUserInput
    ledgerEntries?: LedgerEntriesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    ledgerEntries?: LedgerEntriesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type PaymentStateTransitionCreateWithoutPaymentInput = {
    id?: string
    fromStatus: string
    toStatus: string
    reason?: string | null
    timestamp?: Date | string
    actor?: string
  }

  export type PaymentStateTransitionUncheckedCreateWithoutPaymentInput = {
    id?: string
    fromStatus: string
    toStatus: string
    reason?: string | null
    timestamp?: Date | string
    actor?: string
  }

  export type PaymentStateTransitionCreateOrConnectWithoutPaymentInput = {
    where: PaymentStateTransitionWhereUniqueInput
    create: XOR<PaymentStateTransitionCreateWithoutPaymentInput, PaymentStateTransitionUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentStateTransitionCreateManyPaymentInputEnvelope = {
    data: PaymentStateTransitionCreateManyPaymentInput | PaymentStateTransitionCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type RefundCreateWithoutPaymentInput = {
    id?: string
    amountPaise: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type RefundUncheckedCreateWithoutPaymentInput = {
    id?: string
    amountPaise: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type RefundCreateOrConnectWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    create: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput>
  }

  export type RefundCreateManyPaymentInputEnvelope = {
    data: RefundCreateManyPaymentInput | RefundCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type ChargebackUpsertWithWhereUniqueWithoutPaymentInput = {
    where: ChargebackWhereUniqueInput
    update: XOR<ChargebackUpdateWithoutPaymentInput, ChargebackUncheckedUpdateWithoutPaymentInput>
    create: XOR<ChargebackCreateWithoutPaymentInput, ChargebackUncheckedCreateWithoutPaymentInput>
  }

  export type ChargebackUpdateWithWhereUniqueWithoutPaymentInput = {
    where: ChargebackWhereUniqueInput
    data: XOR<ChargebackUpdateWithoutPaymentInput, ChargebackUncheckedUpdateWithoutPaymentInput>
  }

  export type ChargebackUpdateManyWithWhereWithoutPaymentInput = {
    where: ChargebackScalarWhereInput
    data: XOR<ChargebackUpdateManyMutationInput, ChargebackUncheckedUpdateManyWithoutPaymentInput>
  }

  export type ChargebackScalarWhereInput = {
    AND?: ChargebackScalarWhereInput | ChargebackScalarWhereInput[]
    OR?: ChargebackScalarWhereInput[]
    NOT?: ChargebackScalarWhereInput | ChargebackScalarWhereInput[]
    id?: StringFilter<"Chargeback"> | string
    paymentId?: StringFilter<"Chargeback"> | string
    amountPaise?: IntFilter<"Chargeback"> | number
    reason?: StringNullableFilter<"Chargeback"> | string | null
    status?: StringFilter<"Chargeback"> | string
    createdAt?: DateTimeFilter<"Chargeback"> | Date | string
  }

  export type OrderUpsertWithoutPaymentsInput = {
    update: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    merchant?: MerchantUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    merchantId?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: CardUpdateManyWithoutUserNestedInput
    ledgerEntries?: LedgerEntriesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    ledgerEntries?: LedgerEntriesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentStateTransitionUpsertWithWhereUniqueWithoutPaymentInput = {
    where: PaymentStateTransitionWhereUniqueInput
    update: XOR<PaymentStateTransitionUpdateWithoutPaymentInput, PaymentStateTransitionUncheckedUpdateWithoutPaymentInput>
    create: XOR<PaymentStateTransitionCreateWithoutPaymentInput, PaymentStateTransitionUncheckedCreateWithoutPaymentInput>
  }

  export type PaymentStateTransitionUpdateWithWhereUniqueWithoutPaymentInput = {
    where: PaymentStateTransitionWhereUniqueInput
    data: XOR<PaymentStateTransitionUpdateWithoutPaymentInput, PaymentStateTransitionUncheckedUpdateWithoutPaymentInput>
  }

  export type PaymentStateTransitionUpdateManyWithWhereWithoutPaymentInput = {
    where: PaymentStateTransitionScalarWhereInput
    data: XOR<PaymentStateTransitionUpdateManyMutationInput, PaymentStateTransitionUncheckedUpdateManyWithoutPaymentInput>
  }

  export type PaymentStateTransitionScalarWhereInput = {
    AND?: PaymentStateTransitionScalarWhereInput | PaymentStateTransitionScalarWhereInput[]
    OR?: PaymentStateTransitionScalarWhereInput[]
    NOT?: PaymentStateTransitionScalarWhereInput | PaymentStateTransitionScalarWhereInput[]
    id?: StringFilter<"PaymentStateTransition"> | string
    paymentId?: StringFilter<"PaymentStateTransition"> | string
    fromStatus?: StringFilter<"PaymentStateTransition"> | string
    toStatus?: StringFilter<"PaymentStateTransition"> | string
    reason?: StringNullableFilter<"PaymentStateTransition"> | string | null
    timestamp?: DateTimeFilter<"PaymentStateTransition"> | Date | string
    actor?: StringFilter<"PaymentStateTransition"> | string
  }

  export type RefundUpsertWithWhereUniqueWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    update: XOR<RefundUpdateWithoutPaymentInput, RefundUncheckedUpdateWithoutPaymentInput>
    create: XOR<RefundCreateWithoutPaymentInput, RefundUncheckedCreateWithoutPaymentInput>
  }

  export type RefundUpdateWithWhereUniqueWithoutPaymentInput = {
    where: RefundWhereUniqueInput
    data: XOR<RefundUpdateWithoutPaymentInput, RefundUncheckedUpdateWithoutPaymentInput>
  }

  export type RefundUpdateManyWithWhereWithoutPaymentInput = {
    where: RefundScalarWhereInput
    data: XOR<RefundUpdateManyMutationInput, RefundUncheckedUpdateManyWithoutPaymentInput>
  }

  export type RefundScalarWhereInput = {
    AND?: RefundScalarWhereInput | RefundScalarWhereInput[]
    OR?: RefundScalarWhereInput[]
    NOT?: RefundScalarWhereInput | RefundScalarWhereInput[]
    id?: StringFilter<"Refund"> | string
    paymentId?: StringFilter<"Refund"> | string
    amountPaise?: IntFilter<"Refund"> | number
    status?: StringFilter<"Refund"> | string
    reason?: StringNullableFilter<"Refund"> | string | null
    createdAt?: DateTimeFilter<"Refund"> | Date | string
    processedAt?: DateTimeNullableFilter<"Refund"> | Date | string | null
  }

  export type UserCreateWithoutLedgerEntriesInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
    cards?: CardCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLedgerEntriesInput = {
    id?: string
    name?: string | null
    email: string
    upiId: string
    status?: string
    createdAt?: Date | string
    passwordHash?: string
    transactionPinHash?: string | null
    failedPinAttempts?: number
    lockedUntil?: Date | string | null
    cards?: CardUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLedgerEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLedgerEntriesInput, UserUncheckedCreateWithoutLedgerEntriesInput>
  }

  export type UserUpsertWithoutLedgerEntriesInput = {
    update: XOR<UserUpdateWithoutLedgerEntriesInput, UserUncheckedUpdateWithoutLedgerEntriesInput>
    create: XOR<UserCreateWithoutLedgerEntriesInput, UserUncheckedCreateWithoutLedgerEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLedgerEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLedgerEntriesInput, UserUncheckedUpdateWithoutLedgerEntriesInput>
  }

  export type UserUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: CardUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLedgerEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    upiId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    transactionPinHash?: NullableStringFieldUpdateOperationsInput | string | null
    failedPinAttempts?: IntFieldUpdateOperationsInput | number
    lockedUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cards?: CardUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MerchantCreateWithoutIdempotencyKeysInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyCreateNestedManyWithoutMerchantInput
    apiLogs?: ApiLogCreateNestedManyWithoutMerchantInput
    orders?: OrderCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookCreateNestedManyWithoutMerchantInput
  }

  export type MerchantUncheckedCreateWithoutIdempotencyKeysInput = {
    id?: string
    name: string
    publicKey: string
    secretKeyHash: string
    status?: $Enums.MerchantStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    businessName?: string | null
    email: string
    emailVerified?: boolean
    otpCode?: string | null
    otpExpiry?: Date | string | null
    passwordHash: string
    secretKey?: string | null
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutMerchantInput
    apiLogs?: ApiLogUncheckedCreateNestedManyWithoutMerchantInput
    orders?: OrderUncheckedCreateNestedManyWithoutMerchantInput
    webhooks?: WebhookUncheckedCreateNestedManyWithoutMerchantInput
  }

  export type MerchantCreateOrConnectWithoutIdempotencyKeysInput = {
    where: MerchantWhereUniqueInput
    create: XOR<MerchantCreateWithoutIdempotencyKeysInput, MerchantUncheckedCreateWithoutIdempotencyKeysInput>
  }

  export type MerchantUpsertWithoutIdempotencyKeysInput = {
    update: XOR<MerchantUpdateWithoutIdempotencyKeysInput, MerchantUncheckedUpdateWithoutIdempotencyKeysInput>
    create: XOR<MerchantCreateWithoutIdempotencyKeysInput, MerchantUncheckedCreateWithoutIdempotencyKeysInput>
    where?: MerchantWhereInput
  }

  export type MerchantUpdateToOneWithWhereWithoutIdempotencyKeysInput = {
    where?: MerchantWhereInput
    data: XOR<MerchantUpdateWithoutIdempotencyKeysInput, MerchantUncheckedUpdateWithoutIdempotencyKeysInput>
  }

  export type MerchantUpdateWithoutIdempotencyKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUpdateManyWithoutMerchantNestedInput
    apiLogs?: ApiLogUpdateManyWithoutMerchantNestedInput
    orders?: OrderUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUpdateManyWithoutMerchantNestedInput
  }

  export type MerchantUncheckedUpdateWithoutIdempotencyKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    status?: EnumMerchantStatusFieldUpdateOperationsInput | $Enums.MerchantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    otpCode?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutMerchantNestedInput
    apiLogs?: ApiLogUncheckedUpdateManyWithoutMerchantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutMerchantNestedInput
    webhooks?: WebhookUncheckedUpdateManyWithoutMerchantNestedInput
  }

  export type PaymentCreateWithoutRefundsInput = {
    id?: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackCreateNestedManyWithoutPaymentInput
    order: OrderCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
    transitions?: PaymentStateTransitionCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutRefundsInput = {
    id?: string
    orderId: string
    userId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackUncheckedCreateNestedManyWithoutPaymentInput
    transitions?: PaymentStateTransitionUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutRefundsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
  }

  export type PaymentUpsertWithoutRefundsInput = {
    update: XOR<PaymentUpdateWithoutRefundsInput, PaymentUncheckedUpdateWithoutRefundsInput>
    create: XOR<PaymentCreateWithoutRefundsInput, PaymentUncheckedCreateWithoutRefundsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutRefundsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutRefundsInput, PaymentUncheckedUpdateWithoutRefundsInput>
  }

  export type PaymentUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUpdateManyWithoutPaymentNestedInput
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    transitions?: PaymentStateTransitionUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutRefundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUncheckedUpdateManyWithoutPaymentNestedInput
    transitions?: PaymentStateTransitionUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateWithoutChargebacksInput = {
    id?: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    order: OrderCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
    transitions?: PaymentStateTransitionCreateNestedManyWithoutPaymentInput
    refunds?: RefundCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutChargebacksInput = {
    id?: string
    orderId: string
    userId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    transitions?: PaymentStateTransitionUncheckedCreateNestedManyWithoutPaymentInput
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutChargebacksInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutChargebacksInput, PaymentUncheckedCreateWithoutChargebacksInput>
  }

  export type PaymentUpsertWithoutChargebacksInput = {
    update: XOR<PaymentUpdateWithoutChargebacksInput, PaymentUncheckedUpdateWithoutChargebacksInput>
    create: XOR<PaymentCreateWithoutChargebacksInput, PaymentUncheckedCreateWithoutChargebacksInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutChargebacksInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutChargebacksInput, PaymentUncheckedUpdateWithoutChargebacksInput>
  }

  export type PaymentUpdateWithoutChargebacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    transitions?: PaymentStateTransitionUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutChargebacksInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    transitions?: PaymentStateTransitionUncheckedUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateWithoutTransitionsInput = {
    id?: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackCreateNestedManyWithoutPaymentInput
    order: OrderCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
    refunds?: RefundCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutTransitionsInput = {
    id?: string
    orderId: string
    userId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
    chargebacks?: ChargebackUncheckedCreateNestedManyWithoutPaymentInput
    refunds?: RefundUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutTransitionsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTransitionsInput, PaymentUncheckedCreateWithoutTransitionsInput>
  }

  export type PaymentUpsertWithoutTransitionsInput = {
    update: XOR<PaymentUpdateWithoutTransitionsInput, PaymentUncheckedUpdateWithoutTransitionsInput>
    create: XOR<PaymentCreateWithoutTransitionsInput, PaymentUncheckedCreateWithoutTransitionsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutTransitionsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutTransitionsInput, PaymentUncheckedUpdateWithoutTransitionsInput>
  }

  export type PaymentUpdateWithoutTransitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUpdateManyWithoutPaymentNestedInput
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTransitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUncheckedUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type ApiKeyCreateManyMerchantInput = {
    id?: string
    publicKey: string
    secretKeyHash: string
    environment?: string
    createdAt?: Date | string
    revokedAt?: Date | string | null
    lastUsedAt?: Date | string | null
    secretKey?: string | null
    name?: string
  }

  export type ApiLogCreateManyMerchantInput = {
    id?: string
    endpoint: string
    method: string
    statusCode: number
    requestBody?: string | null
    responseBody?: string | null
    createdAt?: Date | string
  }

  export type IdempotencyKeyCreateManyMerchantInput = {
    id?: string
    key: string
    requestHash?: string | null
    responseBody?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type OrderCreateManyMerchantInput = {
    id?: string
    amountPaise: number
    currency?: string
    receipt?: string | null
    status?: $Enums.OrderStatus
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type WebhookCreateManyMerchantInput = {
    id?: string
    url: string
    events?: WebhookCreateeventsInput | string[]
    secret: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    secretKeyHash?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secretKey?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ApiLogUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiLogUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiLogUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    statusCode?: IntFieldUpdateOperationsInput | number
    requestBody?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdempotencyKeyUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    requestHash?: NullableStringFieldUpdateOperationsInput | string | null
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WebhookUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    secret?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookUncheckedUpdateWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    secret?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookUncheckedUpdateManyWithoutMerchantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    events?: WebhookUpdateeventsInput | string[]
    secret?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateManyUserInput = {
    id?: string
    cardNumber: string
    expiryMonth: number
    expiryYear: number
    cvvHash: string
    status?: string
    createdAt?: Date | string
  }

  export type LedgerEntriesCreateManyUserInput = {
    id?: string
    type: $Enums.LedgerType
    amountPaise: number
    referenceType: $Enums.ReferenceType
    referenceId: string
    balanceAfter: number
    createdAt?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    orderId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
  }

  export type CardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    cvvHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    cvvHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardNumber?: StringFieldUpdateOperationsInput | string
    expiryMonth?: IntFieldUpdateOperationsInput | number
    expiryYear?: IntFieldUpdateOperationsInput | number
    cvvHash?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntriesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amountPaise?: IntFieldUpdateOperationsInput | number
    referenceType?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    referenceId?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntriesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amountPaise?: IntFieldUpdateOperationsInput | number
    referenceType?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    referenceId?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerEntriesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    amountPaise?: IntFieldUpdateOperationsInput | number
    referenceType?: EnumReferenceTypeFieldUpdateOperationsInput | $Enums.ReferenceType
    referenceId?: StringFieldUpdateOperationsInput | string
    balanceAfter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUpdateManyWithoutPaymentNestedInput
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
    transitions?: PaymentStateTransitionUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUncheckedUpdateManyWithoutPaymentNestedInput
    transitions?: PaymentStateTransitionUncheckedUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyOrderInput = {
    id?: string
    userId: string
    method: string
    status?: $Enums.PaymentStatus
    amountPaise: number
    riskScore?: number | null
    signature?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorizationId?: string | null
    capturedAt?: Date | string | null
    failedReason?: string | null
    refundedPaise?: number
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUpdateManyWithoutPaymentNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    transitions?: PaymentStateTransitionUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
    chargebacks?: ChargebackUncheckedUpdateManyWithoutPaymentNestedInput
    transitions?: PaymentStateTransitionUncheckedUpdateManyWithoutPaymentNestedInput
    refunds?: RefundUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    amountPaise?: IntFieldUpdateOperationsInput | number
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorizationId?: NullableStringFieldUpdateOperationsInput | string | null
    capturedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedReason?: NullableStringFieldUpdateOperationsInput | string | null
    refundedPaise?: IntFieldUpdateOperationsInput | number
  }

  export type ChargebackCreateManyPaymentInput = {
    id?: string
    amountPaise: number
    reason?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type PaymentStateTransitionCreateManyPaymentInput = {
    id?: string
    fromStatus: string
    toStatus: string
    reason?: string | null
    timestamp?: Date | string
    actor?: string
  }

  export type RefundCreateManyPaymentInput = {
    id?: string
    amountPaise: number
    status?: string
    reason?: string | null
    createdAt?: Date | string
    processedAt?: Date | string | null
  }

  export type ChargebackUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargebackUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChargebackUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentStateTransitionUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentStateTransitionUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentStateTransitionUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromStatus?: StringFieldUpdateOperationsInput | string
    toStatus?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: StringFieldUpdateOperationsInput | string
  }

  export type RefundUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefundUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountPaise?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}