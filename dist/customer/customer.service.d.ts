import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    createOrUpdate(customer: Customer): Promise<Customer>;
    findAll(): Promise<Customer[]>;
    findById(id: number): Promise<Customer>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
