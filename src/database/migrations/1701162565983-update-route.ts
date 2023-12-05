import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateRoute1701162565983 implements MigrationInterface {
    name = 'UpdateRoute1701162565983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`routes_connected_station_stations\` (\`routesId\` int NOT NULL, \`stationsId\` int NOT NULL, INDEX \`IDX_f38e7a9c91db58a2f0369c0e46\` (\`routesId\`), INDEX \`IDX_7c061a779a76ccbf91ceeda39a\` (\`stationsId\`), PRIMARY KEY (\`routesId\`, \`stationsId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cities\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`districts\` DROP FOREIGN KEY \`FK_65f489c5687887adeeb14b87df7\``);
        await queryRunner.query(`ALTER TABLE \`districts\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`districts\` CHANGE \`cityId\` \`cityId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`photos\` DROP FOREIGN KEY \`FK_6a73ea111d7c2cafe69b8adf994\``);
        await queryRunner.query(`ALTER TABLE \`photos\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`photos\` CHANGE \`stationId\` \`stationId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`stations\` DROP FOREIGN KEY \`FK_d077f78e3da856a69763bb467c0\``);
        await queryRunner.query(`ALTER TABLE \`stations\` DROP FOREIGN KEY \`FK_c9547a97ccdd0f3c97d034d9547\``);
        await queryRunner.query(`ALTER TABLE \`stations\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`stations\` CHANGE \`addressId\` \`addressId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`stations\` CHANGE \`parentStationId\` \`parentStationId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`wards\` DROP FOREIGN KEY \`FK_812309cfc78b10b505a6cd44df5\``);
        await queryRunner.query(`ALTER TABLE \`wards\` DROP FOREIGN KEY \`FK_a261a94099e10de936a887d835f\``);
        await queryRunner.query(`ALTER TABLE \`wards\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`wards\` CHANGE \`districtId\` \`districtId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`wards\` CHANGE \`stationId\` \`stationId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`streets\` DROP FOREIGN KEY \`FK_14231c98a880a83b63ae70ef3ed\``);
        await queryRunner.query(`ALTER TABLE \`streets\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`streets\` CHANGE \`wardId\` \`wardId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_221420cb636d4e9e48aeca528a0\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_f975b3c53730463bc607d23bf8b\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_606f0676c1ba471832c2fb97382\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_304f5fd3d7cc18516194f8d2f3e\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`building\` \`building\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`detail\` \`detail\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`lat\` \`lat\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`lng\` \`lng\` float NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`cityId\` \`cityId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`districtId\` \`districtId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`wardId\` \`wardId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`streetId\` \`streetId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_f127c2c8d3618ee635c96c68c4b\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_bafb08f60d7857f4670c172a6ea\``);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`dob\` \`dob\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`profilePictureId\` \`profilePictureId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`addressId\` \`addressId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` DROP FOREIGN KEY \`FK_3978a0756ce89065075d6d1034e\``);
        await queryRunner.query(`ALTER TABLE \`employee_info\` DROP FOREIGN KEY \`FK_fb2ae22bdee99c7250d7e4cdafd\``);
        await queryRunner.query(`ALTER TABLE \`employee_info\` DROP FOREIGN KEY \`FK_c4ac770e19c7fbfc8a029dbd2c6\``);
        await queryRunner.query(`ALTER TABLE \`employee_info\` DROP FOREIGN KEY \`FK_3b4bef102967f512afe9f968db3\``);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`identityCardImage1Id\` \`identityCardImage1Id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`identityCardImage2Id\` \`identityCardImage2Id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`stationId\` \`stationId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`configs\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`notifications\` DROP FOREIGN KEY \`FK_692a909ee0fa9383e7859f9b406\``);
        await queryRunner.query(`ALTER TABLE \`notifications\` CHANGE \`url\` \`url\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`notifications\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`notifications\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`parcels\` DROP FOREIGN KEY \`FK_6ba773e1ec316866a17d46885a4\``);
        await queryRunner.query(`ALTER TABLE \`parcels\` DROP FOREIGN KEY \`FK_7ff331a7e5c6057dccd871face0\``);
        await queryRunner.query(`ALTER TABLE \`parcels\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`parcels\` CHANGE \`orderId\` \`orderId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`parcels\` CHANGE \`photoId\` \`photoId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_151b79a83ba240b0cb31b2302d1\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_4eee1e5da3efd4038a2746bf50c\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_1b65195fd4ef36e4c63f4169774\``);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`userId\` \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`pickupAddressId\` \`pickupAddressId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`dropOffAddressId\` \`dropOffAddressId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`manifests\` DROP FOREIGN KEY \`FK_0c9304159dafd31097c835066aa\``);
        await queryRunner.query(`ALTER TABLE \`manifests\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`manifests\` CHANGE \`employeeId\` \`employeeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_85acfbdf5c1c33daca863f8118b\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_5d3b1dc47b00f72cd805bd2a284\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_566d11dac13b471fe2c1bfb98c4\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_14ca841b5122aca4bbe9dea6f5f\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_3ea424d49a50b261feecec5477f\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_695e77c7494649b393b54ada737\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`proofNote\` \`proofNote\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`orderId\` \`orderId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`stationInChargeId\` \`stationInChargeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`previousStationInChargeId\` \`previousStationInChargeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`collectorInChargeId\` \`collectorInChargeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`shipperInChargeId\` \`shipperInChargeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`proofId\` \`proofId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`routes\` DROP FOREIGN KEY \`FK_bc1a04791685505a291befd287d\``);
        await queryRunner.query(`ALTER TABLE \`routes\` DROP FOREIGN KEY \`FK_24cd15e58edc12ab45660c0ab10\``);
        await queryRunner.query(`ALTER TABLE \`routes\` CHANGE \`isGoToParent\` \`isGoToParent\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`routes\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`routes\` CHANGE \`employeeId\` \`employeeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`routes\` CHANGE \`stationId\` \`stationId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`districts\` ADD CONSTRAINT \`FK_65f489c5687887adeeb14b87df7\` FOREIGN KEY (\`cityId\`) REFERENCES \`cities\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photos\` ADD CONSTRAINT \`FK_6a73ea111d7c2cafe69b8adf994\` FOREIGN KEY (\`stationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stations\` ADD CONSTRAINT \`FK_d077f78e3da856a69763bb467c0\` FOREIGN KEY (\`addressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stations\` ADD CONSTRAINT \`FK_c9547a97ccdd0f3c97d034d9547\` FOREIGN KEY (\`parentStationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`wards\` ADD CONSTRAINT \`FK_812309cfc78b10b505a6cd44df5\` FOREIGN KEY (\`districtId\`) REFERENCES \`districts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`wards\` ADD CONSTRAINT \`FK_a261a94099e10de936a887d835f\` FOREIGN KEY (\`stationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streets\` ADD CONSTRAINT \`FK_14231c98a880a83b63ae70ef3ed\` FOREIGN KEY (\`wardId\`) REFERENCES \`wards\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_221420cb636d4e9e48aeca528a0\` FOREIGN KEY (\`cityId\`) REFERENCES \`cities\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_f975b3c53730463bc607d23bf8b\` FOREIGN KEY (\`districtId\`) REFERENCES \`districts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_606f0676c1ba471832c2fb97382\` FOREIGN KEY (\`wardId\`) REFERENCES \`wards\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_304f5fd3d7cc18516194f8d2f3e\` FOREIGN KEY (\`streetId\`) REFERENCES \`streets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_f127c2c8d3618ee635c96c68c4b\` FOREIGN KEY (\`profilePictureId\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_bafb08f60d7857f4670c172a6ea\` FOREIGN KEY (\`addressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` ADD CONSTRAINT \`FK_3978a0756ce89065075d6d1034e\` FOREIGN KEY (\`identityCardImage1Id\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` ADD CONSTRAINT \`FK_fb2ae22bdee99c7250d7e4cdafd\` FOREIGN KEY (\`identityCardImage2Id\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` ADD CONSTRAINT \`FK_c4ac770e19c7fbfc8a029dbd2c6\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` ADD CONSTRAINT \`FK_3b4bef102967f512afe9f968db3\` FOREIGN KEY (\`stationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notifications\` ADD CONSTRAINT \`FK_692a909ee0fa9383e7859f9b406\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parcels\` ADD CONSTRAINT \`FK_6ba773e1ec316866a17d46885a4\` FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parcels\` ADD CONSTRAINT \`FK_7ff331a7e5c6057dccd871face0\` FOREIGN KEY (\`photoId\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_151b79a83ba240b0cb31b2302d1\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_4eee1e5da3efd4038a2746bf50c\` FOREIGN KEY (\`pickupAddressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_1b65195fd4ef36e4c63f4169774\` FOREIGN KEY (\`dropOffAddressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`manifests\` ADD CONSTRAINT \`FK_0c9304159dafd31097c835066aa\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee_info\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_85acfbdf5c1c33daca863f8118b\` FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_5d3b1dc47b00f72cd805bd2a284\` FOREIGN KEY (\`stationInChargeId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_566d11dac13b471fe2c1bfb98c4\` FOREIGN KEY (\`previousStationInChargeId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_14ca841b5122aca4bbe9dea6f5f\` FOREIGN KEY (\`collectorInChargeId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_3ea424d49a50b261feecec5477f\` FOREIGN KEY (\`shipperInChargeId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_695e77c7494649b393b54ada737\` FOREIGN KEY (\`proofId\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`routes\` ADD CONSTRAINT \`FK_bc1a04791685505a291befd287d\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee_info\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`routes\` ADD CONSTRAINT \`FK_24cd15e58edc12ab45660c0ab10\` FOREIGN KEY (\`stationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`routes_connected_station_stations\` ADD CONSTRAINT \`FK_f38e7a9c91db58a2f0369c0e466\` FOREIGN KEY (\`routesId\`) REFERENCES \`routes\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`routes_connected_station_stations\` ADD CONSTRAINT \`FK_7c061a779a76ccbf91ceeda39a5\` FOREIGN KEY (\`stationsId\`) REFERENCES \`stations\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`routes_connected_station_stations\` DROP FOREIGN KEY \`FK_7c061a779a76ccbf91ceeda39a5\``);
        await queryRunner.query(`ALTER TABLE \`routes_connected_station_stations\` DROP FOREIGN KEY \`FK_f38e7a9c91db58a2f0369c0e466\``);
        await queryRunner.query(`ALTER TABLE \`routes\` DROP FOREIGN KEY \`FK_24cd15e58edc12ab45660c0ab10\``);
        await queryRunner.query(`ALTER TABLE \`routes\` DROP FOREIGN KEY \`FK_bc1a04791685505a291befd287d\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_695e77c7494649b393b54ada737\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_3ea424d49a50b261feecec5477f\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_14ca841b5122aca4bbe9dea6f5f\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_566d11dac13b471fe2c1bfb98c4\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_5d3b1dc47b00f72cd805bd2a284\``);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` DROP FOREIGN KEY \`FK_85acfbdf5c1c33daca863f8118b\``);
        await queryRunner.query(`ALTER TABLE \`manifests\` DROP FOREIGN KEY \`FK_0c9304159dafd31097c835066aa\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_1b65195fd4ef36e4c63f4169774\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_4eee1e5da3efd4038a2746bf50c\``);
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_151b79a83ba240b0cb31b2302d1\``);
        await queryRunner.query(`ALTER TABLE \`parcels\` DROP FOREIGN KEY \`FK_7ff331a7e5c6057dccd871face0\``);
        await queryRunner.query(`ALTER TABLE \`parcels\` DROP FOREIGN KEY \`FK_6ba773e1ec316866a17d46885a4\``);
        await queryRunner.query(`ALTER TABLE \`notifications\` DROP FOREIGN KEY \`FK_692a909ee0fa9383e7859f9b406\``);
        await queryRunner.query(`ALTER TABLE \`employee_info\` DROP FOREIGN KEY \`FK_3b4bef102967f512afe9f968db3\``);
        await queryRunner.query(`ALTER TABLE \`employee_info\` DROP FOREIGN KEY \`FK_c4ac770e19c7fbfc8a029dbd2c6\``);
        await queryRunner.query(`ALTER TABLE \`employee_info\` DROP FOREIGN KEY \`FK_fb2ae22bdee99c7250d7e4cdafd\``);
        await queryRunner.query(`ALTER TABLE \`employee_info\` DROP FOREIGN KEY \`FK_3978a0756ce89065075d6d1034e\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_bafb08f60d7857f4670c172a6ea\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP FOREIGN KEY \`FK_f127c2c8d3618ee635c96c68c4b\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_304f5fd3d7cc18516194f8d2f3e\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_606f0676c1ba471832c2fb97382\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_f975b3c53730463bc607d23bf8b\``);
        await queryRunner.query(`ALTER TABLE \`addresses\` DROP FOREIGN KEY \`FK_221420cb636d4e9e48aeca528a0\``);
        await queryRunner.query(`ALTER TABLE \`streets\` DROP FOREIGN KEY \`FK_14231c98a880a83b63ae70ef3ed\``);
        await queryRunner.query(`ALTER TABLE \`wards\` DROP FOREIGN KEY \`FK_a261a94099e10de936a887d835f\``);
        await queryRunner.query(`ALTER TABLE \`wards\` DROP FOREIGN KEY \`FK_812309cfc78b10b505a6cd44df5\``);
        await queryRunner.query(`ALTER TABLE \`stations\` DROP FOREIGN KEY \`FK_c9547a97ccdd0f3c97d034d9547\``);
        await queryRunner.query(`ALTER TABLE \`stations\` DROP FOREIGN KEY \`FK_d077f78e3da856a69763bb467c0\``);
        await queryRunner.query(`ALTER TABLE \`photos\` DROP FOREIGN KEY \`FK_6a73ea111d7c2cafe69b8adf994\``);
        await queryRunner.query(`ALTER TABLE \`districts\` DROP FOREIGN KEY \`FK_65f489c5687887adeeb14b87df7\``);
        await queryRunner.query(`ALTER TABLE \`routes\` CHANGE \`stationId\` \`stationId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`routes\` CHANGE \`employeeId\` \`employeeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`routes\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`routes\` CHANGE \`isGoToParent\` \`isGoToParent\` tinyint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`routes\` ADD CONSTRAINT \`FK_24cd15e58edc12ab45660c0ab10\` FOREIGN KEY (\`stationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`routes\` ADD CONSTRAINT \`FK_bc1a04791685505a291befd287d\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee_info\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`proofId\` \`proofId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`shipperInChargeId\` \`shipperInChargeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`collectorInChargeId\` \`collectorInChargeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`previousStationInChargeId\` \`previousStationInChargeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`stationInChargeId\` \`stationInChargeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`orderId\` \`orderId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` CHANGE \`proofNote\` \`proofNote\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_695e77c7494649b393b54ada737\` FOREIGN KEY (\`proofId\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_3ea424d49a50b261feecec5477f\` FOREIGN KEY (\`shipperInChargeId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_14ca841b5122aca4bbe9dea6f5f\` FOREIGN KEY (\`collectorInChargeId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_566d11dac13b471fe2c1bfb98c4\` FOREIGN KEY (\`previousStationInChargeId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_5d3b1dc47b00f72cd805bd2a284\` FOREIGN KEY (\`stationInChargeId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order_tracking\` ADD CONSTRAINT \`FK_85acfbdf5c1c33daca863f8118b\` FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`manifests\` CHANGE \`employeeId\` \`employeeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`manifests\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`manifests\` ADD CONSTRAINT \`FK_0c9304159dafd31097c835066aa\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee_info\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`dropOffAddressId\` \`dropOffAddressId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`pickupAddressId\` \`pickupAddressId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orders\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_1b65195fd4ef36e4c63f4169774\` FOREIGN KEY (\`dropOffAddressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_4eee1e5da3efd4038a2746bf50c\` FOREIGN KEY (\`pickupAddressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_151b79a83ba240b0cb31b2302d1\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parcels\` CHANGE \`photoId\` \`photoId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`parcels\` CHANGE \`orderId\` \`orderId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`parcels\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`parcels\` ADD CONSTRAINT \`FK_7ff331a7e5c6057dccd871face0\` FOREIGN KEY (\`photoId\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`parcels\` ADD CONSTRAINT \`FK_6ba773e1ec316866a17d46885a4\` FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`notifications\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notifications\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notifications\` CHANGE \`url\` \`url\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notifications\` ADD CONSTRAINT \`FK_692a909ee0fa9383e7859f9b406\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`configs\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`stationId\` \`stationId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`userId\` \`userId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`identityCardImage2Id\` \`identityCardImage2Id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`identityCardImage1Id\` \`identityCardImage1Id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` ADD CONSTRAINT \`FK_3b4bef102967f512afe9f968db3\` FOREIGN KEY (\`stationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` ADD CONSTRAINT \`FK_c4ac770e19c7fbfc8a029dbd2c6\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` ADD CONSTRAINT \`FK_fb2ae22bdee99c7250d7e4cdafd\` FOREIGN KEY (\`identityCardImage2Id\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee_info\` ADD CONSTRAINT \`FK_3978a0756ce89065075d6d1034e\` FOREIGN KEY (\`identityCardImage1Id\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`addressId\` \`addressId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`profilePictureId\` \`profilePictureId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`dob\` \`dob\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`lastName\` \`lastName\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`firstName\` \`firstName\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_bafb08f60d7857f4670c172a6ea\` FOREIGN KEY (\`addressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD CONSTRAINT \`FK_f127c2c8d3618ee635c96c68c4b\` FOREIGN KEY (\`profilePictureId\`) REFERENCES \`photos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`streetId\` \`streetId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`wardId\` \`wardId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`districtId\` \`districtId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`cityId\` \`cityId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`lng\` \`lng\` float(12) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`lat\` \`lat\` float(12) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`detail\` \`detail\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` CHANGE \`building\` \`building\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_304f5fd3d7cc18516194f8d2f3e\` FOREIGN KEY (\`streetId\`) REFERENCES \`streets\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_606f0676c1ba471832c2fb97382\` FOREIGN KEY (\`wardId\`) REFERENCES \`wards\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_f975b3c53730463bc607d23bf8b\` FOREIGN KEY (\`districtId\`) REFERENCES \`districts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`addresses\` ADD CONSTRAINT \`FK_221420cb636d4e9e48aeca528a0\` FOREIGN KEY (\`cityId\`) REFERENCES \`cities\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`streets\` CHANGE \`wardId\` \`wardId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`streets\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`streets\` ADD CONSTRAINT \`FK_14231c98a880a83b63ae70ef3ed\` FOREIGN KEY (\`wardId\`) REFERENCES \`wards\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`wards\` CHANGE \`stationId\` \`stationId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`wards\` CHANGE \`districtId\` \`districtId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`wards\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`wards\` ADD CONSTRAINT \`FK_a261a94099e10de936a887d835f\` FOREIGN KEY (\`stationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`wards\` ADD CONSTRAINT \`FK_812309cfc78b10b505a6cd44df5\` FOREIGN KEY (\`districtId\`) REFERENCES \`districts\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stations\` CHANGE \`parentStationId\` \`parentStationId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`stations\` CHANGE \`addressId\` \`addressId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`stations\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`stations\` ADD CONSTRAINT \`FK_c9547a97ccdd0f3c97d034d9547\` FOREIGN KEY (\`parentStationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`stations\` ADD CONSTRAINT \`FK_d077f78e3da856a69763bb467c0\` FOREIGN KEY (\`addressId\`) REFERENCES \`addresses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`photos\` CHANGE \`stationId\` \`stationId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`photos\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`photos\` ADD CONSTRAINT \`FK_6a73ea111d7c2cafe69b8adf994\` FOREIGN KEY (\`stationId\`) REFERENCES \`stations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`districts\` CHANGE \`cityId\` \`cityId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`districts\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`districts\` ADD CONSTRAINT \`FK_65f489c5687887adeeb14b87df7\` FOREIGN KEY (\`cityId\`) REFERENCES \`cities\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cities\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP INDEX \`IDX_7c061a779a76ccbf91ceeda39a\` ON \`routes_connected_station_stations\``);
        await queryRunner.query(`DROP INDEX \`IDX_f38e7a9c91db58a2f0369c0e46\` ON \`routes_connected_station_stations\``);
        await queryRunner.query(`DROP TABLE \`routes_connected_station_stations\``);
    }

}
