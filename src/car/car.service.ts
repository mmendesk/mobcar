import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './car.entity';
import { Repository } from 'typeorm';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car)
        private carRepository: Repository<Car>
    ) { }

    async findAllCars(): Promise<Car[]> {
        const cars = await this.carRepository.find();
        return cars;
    }

    async findCarById(id: string): Promise<Car> {
        const Car = await this.carRepository.findOne(id);
        if (!Car) {
            throw new NotFoundException('Car not found');
        }
        return Car;
    }

    async getCarbyModel(model: string): Promise<Car> {
        const car = await this.carRepository.findOne({ where: { model } });
        if (!car) {
            throw new NotFoundException('Car not found');
        }
        return car;
    }

    async createCar(data: CreateCarInput): Promise<Car> {
        const Car = this.carRepository.create(data);
        const carSaved = await this.carRepository.save(Car);

        if (!carSaved) {
            throw new InternalServerErrorException('Problem to create a Car. Try again');
        }

        return carSaved;
    }

    async updateCar(id: string, data: UpdateCarInput): Promise<Car> {
        const Car = await this.findCarById(id);

        await this.carRepository.update(Car, { ...data });

        const carUpdated = this.carRepository.create({ ...Car, ...data })

        return carUpdated;
    }

    async deleteCar(id: string): Promise<boolean> {
        const Car = await this.findCarById(id);

        const deleted = await this.carRepository.delete(Car);

        if (deleted) {
            return true;
        }

        return false;
    }
}
