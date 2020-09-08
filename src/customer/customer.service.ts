import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) { }

    async createOrUpdate(customer:Customer): Promise<Customer> {
        return await this.customerRepository.save(customer);
    }

    async findAll(){
        return await this.customerRepository.find();
    }

    async findById(id:number) {
        return await this.customerRepository.findOne(id);
    }

    async delete(id:number){
        return await this.customerRepository.delete(id);
    }

}
