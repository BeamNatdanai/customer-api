import {
    Controller,
    Post,
    Body,
    Get,
    Put,
    Delete,
    Param,
    ParseIntPipe,
    HttpStatus,
    HttpCode,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async findAll(): Promise<any>{
      return await this.customerService.findAll();
    }

    @Get("/:id")
    async findOne(@Param("id") id:number){
      return await this.customerService.findById(id);
    }

    @Post()
    async addCustomer(@Body() obj:any): Promise<any>{
        return await this.customerService.createOrUpdate(obj);
    }

    @Put("/:id")
    async updateCustomer(@Body() obj:Customer, @Param("id",ParseIntPipe) id:number): Promise<Customer>{
        const customer = await this.customerService.findById(id);
        customer.first_name = obj.first_name
        customer.last_name = obj.last_name
        customer.tel_no = obj.tel_no
        return await this.customerService.createOrUpdate(customer);
    }

    @Delete("/:id")
    async deleteCustomer(@Param("id",ParseIntPipe) id:number){
        return await this.customerService.delete(id);
    }

}
