/* eslint-disable */
export default async () => {
    const t = {
        ["./enums/sort-column-key.enum"]: await import("./enums/sort-column-key.enum"),
        ["./enums/sort-order.enum"]: await import("./enums/sort-order.enum"),
        ["./modules/files/vo/file.vo"]: await import("./modules/files/vo/file.vo"),
        ["./modules/users/dto/update-user.dto"]: await import("./modules/users/dto/update-user.dto"),
        ["./modules/departments/dto/create-department.dto"]: await import("./modules/departments/dto/create-department.dto"),
        ["./modules/departments/dto/update-department.dto"]: await import("./modules/departments/dto/update-department.dto"),
        ["./modules/menu-items/dto/create-menu-item.dto"]: await import("./modules/menu-items/dto/create-menu-item.dto"),
        ["./modules/menu-items/dto/update-menu-item.dto"]: await import("./modules/menu-items/dto/update-menu-item.dto"),
        ["./modules/notifications/dto/update-notification.dto"]: await import("./modules/notifications/dto/update-notification.dto"),
        ["./modules/positions/dto/create-position.dto"]: await import("./modules/positions/dto/create-position.dto"),
        ["./modules/positions/dto/update-position.dto"]: await import("./modules/positions/dto/update-position.dto"),
        ["./modules/user-traffic-records/dto/create-user-traffic-record.dto"]: await import("./modules/user-traffic-records/dto/create-user-traffic-record.dto"),
        ["./modules/user-traffic-records/dto/update-user-traffic-record.dto"]: await import("./modules/user-traffic-records/dto/update-user-traffic-record.dto"),
        ["./modules/user-traffics/dto/create-user-traffic.dto"]: await import("./modules/user-traffics/dto/create-user-traffic.dto"),
        ["./modules/user-traffics/dto/update-user-traffic.dto"]: await import("./modules/user-traffics/dto/update-user-traffic.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./class/page.dto"), { "PageDto": { page: { required: true, type: () => Number, default: 1, minimum: 1 }, pageSize: { required: true, type: () => Number, default: 10, minimum: 1 }, keywords: { required: false, type: () => String }, startTime: { required: false, type: () => String }, endTime: { required: false, type: () => String }, sortColumnKeys: { required: true, enum: t["./enums/sort-column-key.enum"].SortColumnKey, isArray: true }, sortOrders: { required: true, enum: t["./enums/sort-order.enum"].SortOrder, isArray: true }, orderBy: { required: false, type: () => [Object] } } }], [import("./modules/users/dto/create-user.dto"), { "CreateUserDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./modules/users/dto/update-user.dto"), { "UpdateUserDto": {} }], [import("./modules/departments/dto/create-department.dto"), { "CreateDepartmentDto": {} }], [import("./modules/departments/dto/update-department.dto"), { "UpdateDepartmentDto": {} }], [import("./modules/dictionary-items/dto/create-dictionary-item.dto"), { "CreateDictionaryItemDto": { value: { required: true, type: () => String, maxLength: 250 }, label: { required: true, type: () => String, maxLength: 50 }, remark: { required: false, type: () => String, maxLength: 500 }, enabled: { required: true, type: () => Boolean }, builtIn: { required: true, type: () => Boolean }, sort: { required: false, type: () => Number }, dictionaryId: { required: true, type: () => Number } } }], [import("./modules/dictionary-items/dto/update-dictionary-item.dto"), { "UpdateDictionaryItemDto": {} }], [import("./modules/menu-items/dto/create-menu-item.dto"), { "CreateMenuItemDto": {} }], [import("./modules/menu-items/dto/update-menu-item.dto"), { "UpdateMenuItemDto": {} }], [import("./modules/notifications/dto/create-notification.dto"), { "CreateNotificationDto": { message: { required: true, type: () => String }, userId: { required: true, type: () => Number } } }], [import("./modules/notifications/dto/update-notification.dto"), { "UpdateNotificationDto": {} }], [import("./modules/positions/dto/create-position.dto"), { "CreatePositionDto": {} }], [import("./modules/positions/dto/update-position.dto"), { "UpdatePositionDto": {} }], [import("./modules/user-traffic-records/dto/create-user-traffic-record.dto"), { "CreateUserTrafficRecordDto": {} }], [import("./modules/user-traffic-records/dto/update-user-traffic-record.dto"), { "UpdateUserTrafficRecordDto": {} }], [import("./modules/user-traffics/dto/create-user-traffic.dto"), { "CreateUserTrafficDto": {} }], [import("./modules/user-traffics/dto/update-user-traffic.dto"), { "UpdateUserTrafficDto": {} }], [import("./modules/auth/dto/login.dto"), { "LoginDto": { username: { required: true, type: () => String, minLength: 4, maxLength: 16 }, password: { required: true, type: () => String, minLength: 6, maxLength: 16 } } }], [import("./modules/auth/dto/signup.dto"), { "SignupDto": { username: { required: true, type: () => String, minLength: 4, maxLength: 16 }, password: { required: true, type: () => String, minLength: 6, maxLength: 16, pattern: "/[0-9]/" }, confirmPassword: { required: true, type: () => String }, firstName: { required: true, type: () => String, maxLength: 10 }, lastName: { required: true, type: () => String, maxLength: 10 } } }], [import("./modules/dictionaries/dto/create-dictionary.dto"), { "CreateDictionaryDto": { code: { required: true, type: () => String, maxLength: 50 }, label: { required: true, type: () => String, maxLength: 50 }, remark: { required: false, type: () => String, maxLength: 500 }, enabled: { required: true, type: () => Boolean }, builtIn: { required: true, type: () => Boolean }, sort: { required: false, type: () => Number } } }], [import("./modules/dictionaries/dto/page-dictionary.dto"), { "PageDictionaryDto": { id: { required: false, type: () => Number }, code: { required: false, type: () => String }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean } } }], [import("./modules/dictionaries/dto/patch-dictionary.dto"), { "PatchDictionaryDto": { code: { required: true, type: () => String, maxLength: 50 }, label: { required: false, type: () => String, maxLength: 50 }, remark: { required: false, type: () => String, maxLength: 500 }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean }, sort: { required: false, type: () => Number } } }], [import("./modules/dictionaries/dto/update-dictionary.dto"), { "UpdateDictionaryDto": {} }], [import("./modules/locales/dto/create-locale.dto"), { "CreateLocaleDto": { key: { required: true, type: () => String }, ns: { required: true, type: () => String }, 'en-US': { required: false, type: () => String }, 'zh-CN': { required: false, type: () => String } } }], [import("./modules/locales/dto/update-locale.dto"), { "UpdateLocaleDto": { sort: { required: false, type: () => Number } } }], [import("./modules/permissions/dto/create-permission.dto"), { "CreatePermissionDto": {} }], [import("./modules/permissions/dto/update-permission.dto"), { "UpdatePermissionDto": {} }], [import("./modules/roles/dto/create-role.dto"), { "CreateRoleDto": {} }], [import("./modules/roles/dto/update-role.dto"), { "UpdateRoleDto": {} }], [import("./modules/settings/dto/create-setting.dto"), { "CreateSettingDto": { key: { required: true, type: () => String, maxLength: 50 }, value: { required: true, type: () => String, maxLength: 250 }, label: { required: true, type: () => String, maxLength: 50 }, remark: { required: false, type: () => String, maxLength: 500 }, enabled: { required: true, type: () => Boolean }, builtIn: { required: true, type: () => Boolean } } }], [import("./modules/settings/dto/page-setting.dto"), { "PageSettingDto": { id: { required: false, type: () => Number }, key: { required: false, type: () => String }, value: { required: false, type: () => String }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean } } }], [import("./modules/settings/dto/update-setting.dto"), { "UpdateSettingDto": {} }], [import("./modules/settings/dto/patch-setting.dto"), { "PatchSettingDto": { key: { required: false, type: () => String, maxLength: 50 }, value: { required: false, type: () => String, maxLength: 250 }, label: { required: false, type: () => String, maxLength: 50 }, remark: { required: false, type: () => String, maxLength: 500 }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean } } }], [import("./modules/user-settings/dto/create-user-setting.dto"), { "CreateUserSettingDto": { key: { required: true, type: () => String, maxLength: 50 }, value: { required: true, type: () => String, maxLength: 250 }, label: { required: true, type: () => String, maxLength: 50 }, remark: { required: false, type: () => String, maxLength: 500 }, enabled: { required: true, type: () => Boolean }, builtIn: { required: true, type: () => Boolean } } }], [import("./modules/user-settings/dto/page-user-setting.dto"), { "PageUserSettingDto": { id: { required: false, type: () => Number }, key: { required: false, type: () => String }, value: { required: false, type: () => String }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean }, userId: { required: false, type: () => Number } } }], [import("./modules/user-settings/dto/update-user-setting.dto"), { "UpdateUserSettingDto": {} }], [import("./modules/departments/entities/department.entity"), { "Department": {} }], [import("./modules/menu-items/entities/menu-item.entity"), { "MenuItem": {} }], [import("./modules/notifications/entities/notification.entity"), { "Notification": {} }], [import("./modules/permissions/entities/permission.entity"), { "Permission": {} }], [import("./modules/positions/entities/position.entity"), { "Position": {} }], [import("./modules/roles/entities/role.entity"), { "Role": {} }], [import("./modules/user-traffic-records/entities/user-traffic-record.entity"), { "UserTrafficRecord": {} }], [import("./modules/user-traffics/entities/user-traffic.entity"), { "UserTraffic": {} }], [import("./modules/locales/dto/page-locale.dto"), { "PageLocaleDto": { key: { required: false, type: () => String }, ns: { required: false, type: () => String } } }], [import("./modules/user-settings/dto/patch-user-setting.dto"), { "PatchUserSettingDto": { key: { required: false, type: () => String, maxLength: 50 }, value: { required: false, type: () => String, maxLength: 250 }, label: { required: false, type: () => String, maxLength: 50 }, remark: { required: false, type: () => String, maxLength: 500 }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean } } }], [import("./modules/dictionary-items/dto/page-dictionary-item.dto"), { "PageDictionaryItemDto": { id: { required: false, type: () => Number }, dictionaryId: { required: false, type: () => Number }, label: { required: false, type: () => String }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean } } }], [import("./modules/dictionary-items/dto/patch-dictionary-item.dto"), { "PatchDictionaryItemDto": { value: { required: false, type: () => String, maxLength: 250 }, label: { required: false, type: () => String, maxLength: 50 }, remark: { required: false, type: () => String, maxLength: 500 }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean }, sort: { required: false, type: () => Number } } }]], "controllers": [[import("./shared/cos/cos.controller"), { "CosController": { "uploadToCos": { type: [t["./modules/files/vo/file.vo"].FileVo] } } }], [import("./modules/app.controller"), { "AppController": { "getApp": {}, "getVersion": {} } }], [import("./modules/users/users.controller"), { "UsersController": { "create": {}, "findMany": {}, "findCurrent": {}, "findOneById": {}, "update": { type: t["./modules/users/dto/update-user.dto"].UpdateUserDto }, "remove": { type: String } } }], [import("./modules/auth/auth.controller"), { "AuthController": { "signup": {}, "login": {}, "refresh": {} } }], [import("./modules/cron-jobs/cron-jobs.controller"), { "CronJobsController": { "create": {} } }], [import("./modules/departments/departments.controller"), { "DepartmentsController": { "create": { type: t["./modules/departments/dto/create-department.dto"].CreateDepartmentDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/departments/dto/update-department.dto"].UpdateDepartmentDto }, "remove": { type: String } } }], [import("./modules/dictionaries/dictionaries.controller"), { "DictionariesController": { "create": {}, "findMany": {}, "findOneById": {}, "findOneByCode": {}, "update": {}, "patch": {}, "remove": {} } }], [import("./modules/dictionary-items/dictionary-items.controller"), { "DictionaryItemsController": { "create": {}, "findMany": {}, "findOneById": {}, "update": {}, "patch": {}, "remove": {} } }], [import("./modules/files/files.controller"), { "FilesController": { "upload": { type: [t["./modules/files/vo/file.vo"].FileVo] }, "download": {}, "findOne": {} } }], [import("./modules/locales/locales.controller"), { "LocalesController": { "create": {}, "findAll": {}, "findManyByLang": {}, "findOneById": {}, "update": {}, "remove": {} } }], [import("./modules/menu-items/menu-items.controller"), { "MenuItemsController": { "create": { type: t["./modules/menu-items/dto/create-menu-item.dto"].CreateMenuItemDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/menu-items/dto/update-menu-item.dto"].UpdateMenuItemDto }, "remove": { type: String } } }], [import("./modules/notifications/notifications.controller"), { "NotificationsController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/notifications/dto/update-notification.dto"].UpdateNotificationDto }, "remove": { type: String } } }], [import("./modules/permissions/permissions.controller"), { "PermissionsController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }], [import("./modules/positions/positions.controller"), { "PositionsController": { "create": { type: t["./modules/positions/dto/create-position.dto"].CreatePositionDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/positions/dto/update-position.dto"].UpdatePositionDto }, "remove": { type: String } } }], [import("./modules/roles/roles.controller"), { "RolesController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }], [import("./modules/settings/settings.controller"), { "SettingsController": { "create": {}, "findMany": {}, "findOneById": {}, "findOneByKey": {}, "update": {}, "patch": {}, "remove": {}, "sort": {} } }], [import("./modules/sse/sse.controller"), { "SseController": { "sendNotification": {} } }], [import("./modules/user-settings/user-settings.controller"), { "UserSettingsController": { "create": {}, "findMany": {}, "findOneById": {}, "findOneByKey": {}, "update": {}, "patch": {}, "remove": {} } }], [import("./modules/user-traffic-records/user-traffic-records.controller"), { "UserTrafficRecordsController": { "create": { type: t["./modules/user-traffic-records/dto/create-user-traffic-record.dto"].CreateUserTrafficRecordDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/user-traffic-records/dto/update-user-traffic-record.dto"].UpdateUserTrafficRecordDto }, "remove": { type: String } } }], [import("./modules/user-traffics/user-traffics.controller"), { "UserTrafficsController": { "create": { type: t["./modules/user-traffics/dto/create-user-traffic.dto"].CreateUserTrafficDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/user-traffics/dto/update-user-traffic.dto"].UpdateUserTrafficDto }, "remove": { type: String } } }]] } };
};