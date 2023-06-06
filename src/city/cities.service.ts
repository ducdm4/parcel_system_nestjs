import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CityEntity } from '../typeorm/entities/city.entity';
import { CreateCityDto } from './dto/createCity.dto';
import { UpdateCityDto } from './dto/updateCity.dto';

@Injectable()
export class CitiesService {
  constructor(
    @Inject('CITY_REPOSITORY')
    private cityRepository: Repository<CityEntity>,
  ) {}

  async getListCity(filter) {
    const cityQuery = this.cityRepository.createQueryBuilder();
    if (filter.keyword) {
      cityQuery.where('name LIKE :keyword', { keyword: `%${filter.keyword}%` });
    }
    if (filter.sort.length) {
      filter.sort.forEach((sortItem) => {
        cityQuery.orderBy(sortItem.key, sortItem.value.toUpperCase());
      });
    }
    console.log('ducdmmm', await cityQuery.getMany());
    return await cityQuery.getMany();
  }

  async getCityById(id: number) {
    const city = await this.cityRepository.findOne({
      where: {
        id,
      },
    });
    if (city) {
      return city;
    } else {
      throw new NotFoundException('city not found');
    }
  }

  async createCity(cityData: CreateCityDto) {
    const newCity = this.cityRepository.create({
      ...cityData,
      createdAt: new Date(),
    });
    const data = await this.cityRepository.save(newCity);
    return data;
  }

  async updateCityInfo(data: UpdateCityDto, id: number) {
    const checkCity = await this.getCityById(id);
    if (checkCity) {
      const result = await this.cityRepository.update({ id }, data);
      console.log('ducdm', result);
      return result;
    }
  }

  async deleteCity(id) {
    const checkCity = await this.getCityById(id);
    if (checkCity) {
      const result = await this.cityRepository.softDelete(id);
      console.log('ducdm', result);
      return result;
    }
  }
}
