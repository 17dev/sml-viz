```javascript
// src/utils/settings.js

const settings = {
  databaseTypes: ['mysql', 'postgres'],
  defaultDatabaseType: 'mysql',
  defaultTableName: 'chats',
};

function getDatabaseTypes() {
  return settings.databaseTypes;
}

function getDefaultDatabaseType() {
  return settings.defaultDatabaseType;
}

function getDefaultTableName() {
  return settings.defaultTableName;
}

function setDefaultDatabaseType(databaseType) {
  if (settings.databaseTypes.includes(databaseType)) {
    settings.defaultDatabaseType = databaseType;
  } else {
    throw new Error(`Invalid database type. Allowed types are ${settings.databaseTypes.join(', ')}`);
  }
}

function setDefaultTableName(tableName) {
  settings.defaultTableName = tableName;
}

export {
  getDatabaseTypes,
  getDefaultDatabaseType,
  getDefaultTableName,
  setDefaultDatabaseType,
  setDefaultTableName,
};
```