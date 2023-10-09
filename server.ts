// src/index.ts
import express, { Request, Response } from 'express';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
const PORT = 8888;

// Sequelize initialization
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'peanut.db.elephantsql.com',
  port: 5432,
  username: 'mditngtn',
  password: 'DNeewVszLNLMHQ1A87wvDf2pVh2PwVNb'
  database: 'mditngtn',
});

// Define a User model
const User = sequelize.define('User', {
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
      isEmail: {
        msg: 'Invalid email address.',
      },
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      is: {
        args: /^[0-9]+$/,
        msg: 'Phone number must contain only numeric values.',
      },
    },
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isIn: {
        args: [['Female', 'Male']],
        msg: 'Invalid gender.',
      },
    },
  },
  day: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isNumeric: {
        msg: 'Invalid day.',
      },
    },
  },
  month: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isNumeric: {
        msg: 'Invalid month.',
      },
    },
  },
  year: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isNumeric: {
        msg: 'Invalid year.',
      },
    },
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Sync the database
sequelize.sync();

app.use(express.json());

// API endpoint to save user data
app.post('/api/save-user', async (req: Request, res: Response) => {
  try {
    // Validate that all fields are completed
    const validationError = validateUserData(req.body);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    // Save user data
    const user = await User.create(req.body);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    // If there's an error, handle it appropriately
    return res.status(500).json({ error: 'Internal Server Error' } as any);
  }
});


// Function to validate user data
function validateUserData(data: any): string | null {
  const requiredFields = ['firstName', 'surname', 'email', 'phoneNumber', 'gender', 'day', 'month', 'year', 'comments'];

  for (const field of requiredFields) {
    if (!data[field]) {
      return `${field} is required.`;
    }
  }

  return null;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
