export enum ROLE_LIST {
  ADMIN = 1,
  OPERATOR = 2,
  COLLECTOR = 3,
  SHIPPER = 4,
  CUSTOMER = 5,
}

export enum STATION_TYPE {
  WARD,
  DISTRICT,
  CITY,
}

export enum ORDER_STATUS {
  ORDER_CREATED,
  WAITING_COLLECTOR_CONFIRM,
  WAITING_CUSTOMER_BRING_TO_STATION,
  COLLECTOR_ON_THE_WAY_TO_STATION_1,
  ORDER_ARRIVED_STATION_1,
  ORDER_READY_TO_SHIP,
  ORDER_ON_THE_WAY_TO_RECEIVER,
  ORDER_HAS_BEEN_SHIPPED,
  WAITING_TO_TRANSIT_1,
  COLLECTOR_ON_THE_WAY_TO_STATION_2,
  ORDER_ARRIVED_STATION_2,
  WAITING_TO_TRANSIT_2,
  COLLECTOR_ON_THE_WAY_TO_STATION_3,
  ORDER_ARRIVED_STATION_3,
  WAITING_TO_TRANSIT_3,
  COLLECTOR_ON_THE_WAY_TO_STATION_4,
  ORDER_ARRIVED_STATION_4,
  WAITING_TO_TRANSIT_4,
}

export class commonUpdateDto {
  id: number;
}

export interface KeyValue {
  [key: string]: any;
}

export const GENERAL_CONFIG = {
  baseRate: 10000,
  weightLevel: 3000,
  ward: 4000,
  district: 6000,
};
