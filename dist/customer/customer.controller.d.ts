import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    findAll(): Promise<any>;
    findOne(id: number): Promise<Customer>;
    addCustomer(obj: any): Promise<any>;
    updateCustomer(obj: Customer, id: number): Promise<Customer>;
    deleteCustomer(id: number): Promise<import("typeorm").DeleteResult>;
}
