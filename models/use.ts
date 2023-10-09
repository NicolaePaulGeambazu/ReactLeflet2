// user.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize'; // Adjust the path as needed

interface UserAttributes {
  firstName: string;
  surname: string;
  email: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public firstName!: string;
  public surname!: string;
  public email!: string;
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
