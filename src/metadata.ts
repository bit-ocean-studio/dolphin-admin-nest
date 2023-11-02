/* eslint-disable */
export default async () => {
    const t = {
        ["./modules/users/dto/update-user.dto"]: await import("./modules/users/dto/update-user.dto"),
        ["./modules/files/vo/file.vo"]: await import("./modules/files/vo/file.vo"),
        ["./modules/departments/dto/create-department.dto"]: await import("./modules/departments/dto/create-department.dto"),
        ["./modules/departments/dto/update-department.dto"]: await import("./modules/departments/dto/update-department.dto"),
        ["./modules/dictionaries/dto/create-dictionary.dto"]: await import("./modules/dictionaries/dto/create-dictionary.dto"),
        ["./modules/dictionaries/dto/update-dictionary.dto"]: await import("./modules/dictionaries/dto/update-dictionary.dto"),
        ["./modules/dictionary-items/dto/create-dictionary-item.dto"]: await import("./modules/dictionary-items/dto/create-dictionary-item.dto"),
        ["./modules/dictionary-items/dto/update-dictionary-item.dto"]: await import("./modules/dictionary-items/dto/update-dictionary-item.dto"),
        ["./modules/menu-items/dto/create-menu-item.dto"]: await import("./modules/menu-items/dto/create-menu-item.dto"),
        ["./modules/menu-items/dto/update-menu-item.dto"]: await import("./modules/menu-items/dto/update-menu-item.dto"),
        ["./modules/notifications/dto/create-notification.dto"]: await import("./modules/notifications/dto/create-notification.dto"),
        ["./modules/notifications/dto/update-notification.dto"]: await import("./modules/notifications/dto/update-notification.dto"),
        ["./modules/positions/dto/create-position.dto"]: await import("./modules/positions/dto/create-position.dto"),
        ["./modules/positions/dto/update-position.dto"]: await import("./modules/positions/dto/update-position.dto"),
        ["./modules/settings/dto/create-setting.dto"]: await import("./modules/settings/dto/create-setting.dto"),
        ["./modules/settings/dto/update-setting.dto"]: await import("./modules/settings/dto/update-setting.dto"),
        ["./modules/user-traffic-records/dto/create-user-traffic-record.dto"]: await import("./modules/user-traffic-records/dto/create-user-traffic-record.dto"),
        ["./modules/user-traffic-records/dto/update-user-traffic-record.dto"]: await import("./modules/user-traffic-records/dto/update-user-traffic-record.dto"),
        ["./modules/user-traffics/dto/create-user-traffic.dto"]: await import("./modules/user-traffics/dto/create-user-traffic.dto"),
        ["./modules/user-traffics/dto/update-user-traffic.dto"]: await import("./modules/user-traffics/dto/update-user-traffic.dto")
    };
    return { "@nestjs/swagger": { "models": [[import("./modules/users/dto/create-user.dto"), { "CreateUserDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./modules/users/dto/update-user.dto"), { "UpdateUserDto": {} }], [import("./modules/departments/dto/create-department.dto"), { "CreateDepartmentDto": {} }], [import("./modules/departments/dto/update-department.dto"), { "UpdateDepartmentDto": {} }], [import("./modules/dictionaries/dto/create-dictionary.dto"), { "CreateDictionaryDto": {} }], [import("./modules/dictionaries/dto/update-dictionary.dto"), { "UpdateDictionaryDto": {} }], [import("./modules/dictionary-items/dto/create-dictionary-item.dto"), { "CreateDictionaryItemDto": {} }], [import("./modules/dictionary-items/dto/update-dictionary-item.dto"), { "UpdateDictionaryItemDto": {} }], [import("./modules/menu-items/dto/create-menu-item.dto"), { "CreateMenuItemDto": {} }], [import("./modules/menu-items/dto/update-menu-item.dto"), { "UpdateMenuItemDto": {} }], [import("./modules/notifications/dto/create-notification.dto"), { "CreateNotificationDto": {} }], [import("./modules/notifications/dto/update-notification.dto"), { "UpdateNotificationDto": {} }], [import("./modules/positions/dto/create-position.dto"), { "CreatePositionDto": {} }], [import("./modules/positions/dto/update-position.dto"), { "UpdatePositionDto": {} }], [import("./modules/settings/dto/create-setting.dto"), { "CreateSettingDto": {} }], [import("./modules/settings/dto/update-setting.dto"), { "UpdateSettingDto": {} }], [import("./modules/user-traffic-records/dto/create-user-traffic-record.dto"), { "CreateUserTrafficRecordDto": {} }], [import("./modules/user-traffic-records/dto/update-user-traffic-record.dto"), { "UpdateUserTrafficRecordDto": {} }], [import("./modules/user-traffics/dto/create-user-traffic.dto"), { "CreateUserTrafficDto": {} }], [import("./modules/user-traffics/dto/update-user-traffic.dto"), { "UpdateUserTrafficDto": {} }], [import("./class/dto/page.dto"), { "PageDto": { page: { required: true, type: () => Number, minimum: 1 }, pageSize: { required: true, type: () => Number, minimum: 1 }, searchText: { required: false, type: () => String } } }], [import("./class/dto/page-date.dto"), { "PageDateDto": { startTime: { required: false, type: () => Date }, endTime: { required: false, type: () => Date } } }], [import("./modules/auth/dto/login.dto"), { "LoginDto": { username: { required: true, type: () => String, minLength: 4, maxLength: 16 }, password: { required: true, type: () => String, minLength: 6, maxLength: 16 } } }], [import("./modules/permissions/dto/create-permission.dto"), { "CreatePermissionDto": {} }], [import("./modules/permissions/dto/update-permission.dto"), { "UpdatePermissionDto": {} }], [import("./modules/roles/dto/create-role.dto"), { "CreateRoleDto": {} }], [import("./modules/roles/dto/update-role.dto"), { "UpdateRoleDto": {} }], [import("./modules/departments/entities/department.entity"), { "Department": {} }], [import("./modules/dictionaries/entities/dictionary.entity"), { "Dictionary": {} }], [import("./modules/dictionary-items/entities/dictionary-item.entity"), { "DictionaryItem": {} }], [import("./modules/menu-items/entities/menu-item.entity"), { "MenuItem": {} }], [import("./modules/notifications/entities/notification.entity"), { "Notification": {} }], [import("./modules/permissions/entities/permission.entity"), { "Permission": {} }], [import("./modules/positions/entities/position.entity"), { "Position": {} }], [import("./modules/roles/entities/role.entity"), { "Role": {} }], [import("./modules/settings/entities/setting.entity"), { "Setting": {} }], [import("./modules/user-traffic-records/entities/user-traffic-record.entity"), { "UserTrafficRecord": {} }], [import("./modules/user-traffics/entities/user-traffic.entity"), { "UserTraffic": {} }]], "controllers": [[import("./modules/app.controller"), { "AppController": { "getApp": {}, "getVersion": {}, "getRedirect": {}, "getCurrentLang": {} } }], [import("./modules/users/users.controller"), { "UsersController": { "create": {}, "findMany": {}, "findCurrent": {}, "findOne": {}, "update": { type: t["./modules/users/dto/update-user.dto"].UpdateUserDto }, "remove": { type: String } } }], [import("./modules/auth/auth.controller"), { "AuthController": { "login": { type: Object } } }], [import("./modules/cos/cos.controller"), { "CosController": { "uploadToCos": { type: [t["./modules/files/vo/file.vo"].FileVo] } } }], [import("./modules/departments/departments.controller"), { "DepartmentsController": { "create": { type: t["./modules/departments/dto/create-department.dto"].CreateDepartmentDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/departments/dto/update-department.dto"].UpdateDepartmentDto }, "remove": { type: String } } }], [import("./modules/dictionaries/dictionaries.controller"), { "DictionariesController": { "create": { type: t["./modules/dictionaries/dto/create-dictionary.dto"].CreateDictionaryDto }, "findMany": {}, "findOne": { type: String }, "update": { type: t["./modules/dictionaries/dto/update-dictionary.dto"].UpdateDictionaryDto }, "remove": { type: String } } }], [import("./modules/dictionary-items/dictionary-items.controller"), { "DictionaryItemsController": { "create": { type: t["./modules/dictionary-items/dto/create-dictionary-item.dto"].CreateDictionaryItemDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/dictionary-items/dto/update-dictionary-item.dto"].UpdateDictionaryItemDto }, "remove": { type: String } } }], [import("./modules/files/files.controller"), { "FilesController": { "upload": { type: [t["./modules/files/vo/file.vo"].FileVo] }, "download": {}, "findOne": {} } }], [import("./modules/menu-items/menu-items.controller"), { "MenuItemsController": { "create": { type: t["./modules/menu-items/dto/create-menu-item.dto"].CreateMenuItemDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/menu-items/dto/update-menu-item.dto"].UpdateMenuItemDto }, "remove": { type: String } } }], [import("./modules/notifications/notifications.controller"), { "NotificationsController": { "create": { type: t["./modules/notifications/dto/create-notification.dto"].CreateNotificationDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/notifications/dto/update-notification.dto"].UpdateNotificationDto }, "remove": { type: String } } }], [import("./modules/permissions/permissions.controller"), { "PermissionsController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }], [import("./modules/positions/positions.controller"), { "PositionsController": { "create": { type: t["./modules/positions/dto/create-position.dto"].CreatePositionDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/positions/dto/update-position.dto"].UpdatePositionDto }, "remove": { type: String } } }], [import("./modules/roles/roles.controller"), { "RolesController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }], [import("./modules/settings/settings.controller"), { "SettingsController": { "create": { type: t["./modules/settings/dto/create-setting.dto"].CreateSettingDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/settings/dto/update-setting.dto"].UpdateSettingDto }, "remove": { type: String } } }], [import("./modules/user-traffic-records/user-traffic-records.controller"), { "UserTrafficRecordsController": { "create": { type: t["./modules/user-traffic-records/dto/create-user-traffic-record.dto"].CreateUserTrafficRecordDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/user-traffic-records/dto/update-user-traffic-record.dto"].UpdateUserTrafficRecordDto }, "remove": { type: String } } }], [import("./modules/user-traffics/user-traffics.controller"), { "UserTrafficsController": { "create": { type: t["./modules/user-traffics/dto/create-user-traffic.dto"].CreateUserTrafficDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/user-traffics/dto/update-user-traffic.dto"].UpdateUserTrafficDto }, "remove": { type: String } } }], [import("./modules/cron-jobs/cron-jobs.controller"), { "CronJobsController": { "create": {} } }], [import("./modules/sse/sse.controller"), { "SseController": { "sendNotification": { type: Object } } }]] } };
};