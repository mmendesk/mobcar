import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Car } from './car.entity';
import { CarService } from './car.service';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';

@Resolver('Car')
export class CarResolver {
    constructor(
        private carService: CarService
    ) { }

    @Query(() => [Car])
    async cars(): Promise<Car[]> {
        const cars = await this.carService.findAllCars();
        return cars;
    }

    @Query(() => Car)
    async car(
        @Args('id') id: string
    ): Promise<Car> {
        const car = this.carService.findCarById(id);
        return car;
    }

    @Query(() => Car)
    async getCarbyModel(@Args('model') model: string): Promise<Car> {
        return this.carService.getCarbyModel(model);
    }

    @Mutation(() => Car)
    async createCar(
        @Args('data') data: CreateCarInput
    ): Promise<Car> {
        const car = await this.carService.createCar(data);
        return car;
    }

    @Mutation(() => Car)
    async updateCar(
        @Args('id') id: string,
        @Args('data') data: UpdateCarInput
    ): Promise<Car> {
        const car = this.carService.updateCar(id, data);
        return car;
    }

    @Mutation(() => Boolean)
    async deleteCar(
        @Args('id') id: string
    ): Promise<boolean> {
        const deleted = await this.carService.deleteCar(id);
        return deleted;
    }
}
