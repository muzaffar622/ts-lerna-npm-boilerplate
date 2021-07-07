import { serviceName } from "@serviceB/serviceName";
import { count } from "libs/helper";

export const get = () => serviceName;

export const countResult = count(5, 10);
