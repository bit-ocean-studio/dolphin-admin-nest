/* eslint-disable */
export default async () => {
    const t = {
        ["./enums/sort-column-key.enum"]: await import("./enums/sort-column-key.enum"),
        ["./enums/sort-order.enum"]: await import("./enums/sort-order.enum"),
        ["./modules/settings/dto/label-trans.dto"]: await import("./modules/settings/dto/label-trans.dto"),
        ["./modules/settings/dto/remark-trans.dto"]: await import("./modules/settings/dto/remark-trans.dto"),
        ["./modules/user-settings/dto/label-trans.dto"]: await import("./modules/user-settings/dto/label-trans.dto"),
        ["./modules/user-settings/dto/remark-trans.dto"]: await import("./modules/user-settings/dto/remark-trans.dto"),
        ["./modules/users/dto/update-user.dto"]: await import("./modules/users/dto/update-user.dto"),
        ["./modules/departments/dto/create-department.dto"]: await import("./modules/departments/dto/create-department.dto"),
        ["./modules/departments/dto/update-department.dto"]: await import("./modules/departments/dto/update-department.dto"),
        ["./modules/dictionaries/dto/create-dictionary.dto"]: await import("./modules/dictionaries/dto/create-dictionary.dto"),
        ["./modules/dictionaries/dto/update-dictionary.dto"]: await import("./modules/dictionaries/dto/update-dictionary.dto"),
        ["./modules/dictionary-items/dto/create-dictionary-item.dto"]: await import("./modules/dictionary-items/dto/create-dictionary-item.dto"),
        ["./modules/dictionary-items/dto/update-dictionary-item.dto"]: await import("./modules/dictionary-items/dto/update-dictionary-item.dto"),
        ["./modules/files/vo/file.vo"]: await import("./modules/files/vo/file.vo"),
        ["./modules/menu-items/dto/create-menu-item.dto"]: await import("./modules/menu-items/dto/create-menu-item.dto"),
        ["./modules/menu-items/dto/update-menu-item.dto"]: await import("./modules/menu-items/dto/update-menu-item.dto"),
        ["./modules/notifications/dto/update-notification.dto"]: await import("./modules/notifications/dto/update-notification.dto"),
        ["./modules/positions/dto/create-position.dto"]: await import("./modules/positions/dto/create-position.dto"),
        ["./modules/positions/dto/update-position.dto"]: await import("./modules/positions/dto/update-position.dto"),
        ["./modules/settings/vo/page-setting.vo"]: await import("./modules/settings/vo/page-setting.vo"),
        ["./modules/user-traffic-records/dto/create-user-traffic-record.dto"]: await import("./modules/user-traffic-records/dto/create-user-traffic-record.dto"),
        ["./modules/user-traffic-records/dto/update-user-traffic-record.dto"]: await import("./modules/user-traffic-records/dto/update-user-traffic-record.dto"),
        ["./modules/user-traffics/dto/create-user-traffic.dto"]: await import("./modules/user-traffics/dto/create-user-traffic.dto"),
        ["./modules/user-traffics/dto/update-user-traffic.dto"]: await import("./modules/user-traffics/dto/update-user-traffic.dto"),
        ["./modules/user-settings/vo/page-user-setting.vo"]: await import("./modules/user-settings/vo/page-user-setting.vo"),
        ["./modules/users/vo/user.vo"]: await import("./modules/users/vo/user.vo")
    };
    return { "@nestjs/swagger": { "models": [[import("./class/dto/multilingual.dto"), { "MultilingualDto": { 'en-US': { required: true, type: () => String }, 'zh-CN': { required: true, type: () => String } } }], [import("./class/dto/page.dto"), { "PageDto": { page: { required: true, type: () => Number, default: 1, minimum: 1 }, pageSize: { required: true, type: () => Number, default: 10, minimum: 1 }, searchText: { required: false, type: () => String }, startTime: { required: false, type: () => String }, endTime: { required: false, type: () => String }, sortColumnKeys: { required: true, enum: t["./enums/sort-column-key.enum"].SortColumnKey, isArray: true }, sortOrders: { required: true, enum: t["./enums/sort-order.enum"].SortOrder, isArray: true } } }], [import("./modules/settings/dto/label-trans.dto"), { "LabelTransDto": { 'en-US': { required: true, type: () => String, maxLength: 50 }, 'zh-CN': { required: true, type: () => String, maxLength: 50 } } }], [import("./modules/settings/dto/remark-trans.dto"), { "RemarkTransDto": { 'en-US': { required: true, type: () => String, maxLength: 500 }, 'zh-CN': { required: true, type: () => String, maxLength: 500 } } }], [import("./modules/user-settings/dto/label-trans.dto"), { "LabelTransDto": { 'en-US': { required: true, type: () => String, maxLength: 50 }, 'zh-CN': { required: true, type: () => String, maxLength: 50 } } }], [import("./modules/user-settings/dto/remark-trans.dto"), { "RemarkTransDto": { 'en-US': { required: true, type: () => String, maxLength: 500 }, 'zh-CN': { required: true, type: () => String, maxLength: 500 } } }], [import("./modules/users/dto/create-user.dto"), { "CreateUserDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./modules/users/dto/update-user.dto"), { "UpdateUserDto": {} }], [import("./modules/departments/dto/create-department.dto"), { "CreateDepartmentDto": {} }], [import("./modules/departments/dto/update-department.dto"), { "UpdateDepartmentDto": {} }], [import("./modules/dictionaries/dto/create-dictionary.dto"), { "CreateDictionaryDto": {} }], [import("./modules/dictionaries/dto/update-dictionary.dto"), { "UpdateDictionaryDto": {} }], [import("./modules/dictionary-items/dto/create-dictionary-item.dto"), { "CreateDictionaryItemDto": {} }], [import("./modules/dictionary-items/dto/update-dictionary-item.dto"), { "UpdateDictionaryItemDto": {} }], [import("./modules/menu-items/dto/create-menu-item.dto"), { "CreateMenuItemDto": {} }], [import("./modules/menu-items/dto/update-menu-item.dto"), { "UpdateMenuItemDto": {} }], [import("./modules/notifications/dto/create-notification.dto"), { "CreateNotificationDto": { message: { required: true, type: () => String }, userId: { required: true, type: () => Number } } }], [import("./modules/notifications/dto/update-notification.dto"), { "UpdateNotificationDto": {} }], [import("./modules/positions/dto/create-position.dto"), { "CreatePositionDto": {} }], [import("./modules/positions/dto/update-position.dto"), { "UpdatePositionDto": {} }], [import("./modules/user-traffic-records/dto/create-user-traffic-record.dto"), { "CreateUserTrafficRecordDto": {} }], [import("./modules/user-traffic-records/dto/update-user-traffic-record.dto"), { "UpdateUserTrafficRecordDto": {} }], [import("./modules/user-traffics/dto/create-user-traffic.dto"), { "CreateUserTrafficDto": {} }], [import("./modules/user-traffics/dto/update-user-traffic.dto"), { "UpdateUserTrafficDto": {} }], [import("./modules/settings/dto/create-setting.dto"), { "CreateSettingDto": { key: { required: true, type: () => String, maxLength: 50 }, value: { required: true, type: () => String, maxLength: 250 }, label: { required: true, type: () => t["./modules/settings/dto/label-trans.dto"].LabelTransDto }, remark: { required: true, type: () => t["./modules/settings/dto/remark-trans.dto"].RemarkTransDto }, enabled: { required: true, type: () => Boolean }, builtIn: { required: true, type: () => Boolean } } }], [import("./modules/settings/dto/update-setting.dto"), { "UpdateSettingDto": {} }], [import("./modules/auth/dto/login.dto"), { "LoginDto": { username: { required: true, type: () => String, minLength: 4, maxLength: 16 }, password: { required: true, type: () => String, minLength: 6, maxLength: 16 } } }], [import("./modules/permissions/dto/create-permission.dto"), { "CreatePermissionDto": {} }], [import("./modules/permissions/dto/update-permission.dto"), { "UpdatePermissionDto": {} }], [import("./modules/roles/dto/create-role.dto"), { "CreateRoleDto": {} }], [import("./modules/roles/dto/update-role.dto"), { "UpdateRoleDto": {} }], [import("./modules/auth/dto/signup.dto"), { "SignupDto": { username: { required: true, type: () => String, minLength: 6, maxLength: 16 }, password: { required: true, type: () => String, minLength: 6, maxLength: 16, pattern: "/[0-9]/" }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String } } }], [import("./modules/departments/entities/department.entity"), { "Department": {} }], [import("./modules/dictionaries/entities/dictionary.entity"), { "Dictionary": {} }], [import("./modules/dictionary-items/entities/dictionary-item.entity"), { "DictionaryItem": {} }], [import("./modules/menu-items/entities/menu-item.entity"), { "MenuItem": {} }], [import("./modules/notifications/entities/notification.entity"), { "Notification": {} }], [import("./modules/permissions/entities/permission.entity"), { "Permission": {} }], [import("./modules/positions/entities/position.entity"), { "Position": {} }], [import("./modules/roles/entities/role.entity"), { "Role": {} }], [import("./modules/user-traffic-records/entities/user-traffic-record.entity"), { "UserTrafficRecord": {} }], [import("./modules/user-traffics/entities/user-traffic.entity"), { "UserTraffic": {} }], [import("./modules/user-settings/dto/create-user-setting.dto"), { "CreateUserSettingDto": { key: { required: true, type: () => String, maxLength: 50 }, value: { required: true, type: () => String, maxLength: 250 }, label: { required: true, type: () => t["./modules/user-settings/dto/label-trans.dto"].LabelTransDto }, remark: { required: true, type: () => t["./modules/user-settings/dto/remark-trans.dto"].RemarkTransDto }, enabled: { required: true, type: () => Boolean }, builtIn: { required: true, type: () => Boolean } } }], [import("./modules/user-settings/dto/update-user-setting.dto"), { "UpdateUserSettingDto": {} }], [import("./modules/settings/dto/page-setting.dto"), { "PageSettingDto": { id: { required: false, type: () => Number }, key: { required: false, type: () => String }, value: { required: false, type: () => String }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean } } }], [import("./modules/user-settings/dto/page-user-setting.dto"), { "PageUserSettingDto": { id: { required: false, type: () => Number }, key: { required: false, type: () => String }, value: { required: false, type: () => String }, enabled: { required: false, type: () => Boolean }, builtIn: { required: false, type: () => Boolean }, userId: { required: false, type: () => Number } } }]], "controllers": [[import("./modules/users/users.controller"), { "UsersController": { "create": {}, "findMany": {}, "findCurrent": {}, "findOneById": {}, "update": { type: t["./modules/users/dto/update-user.dto"].UpdateUserDto }, "remove": { type: String } } }], [import("./modules/auth/auth.controller"), { "AuthController": { "signup": {}, "login": {}, "refresh": {} } }], [import("./modules/cron-jobs/cron-jobs.controller"), { "CronJobsController": { "create": {} } }], [import("./modules/departments/departments.controller"), { "DepartmentsController": { "create": { type: t["./modules/departments/dto/create-department.dto"].CreateDepartmentDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/departments/dto/update-department.dto"].UpdateDepartmentDto }, "remove": { type: String } } }], [import("./modules/dictionaries/dictionaries.controller"), { "DictionariesController": { "create": { type: t["./modules/dictionaries/dto/create-dictionary.dto"].CreateDictionaryDto }, "findMany": {}, "findOne": { type: String }, "update": { type: t["./modules/dictionaries/dto/update-dictionary.dto"].UpdateDictionaryDto }, "remove": { type: String } } }], [import("./modules/dictionary-items/dictionary-items.controller"), { "DictionaryItemsController": { "create": { type: t["./modules/dictionary-items/dto/create-dictionary-item.dto"].CreateDictionaryItemDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/dictionary-items/dto/update-dictionary-item.dto"].UpdateDictionaryItemDto }, "remove": { type: String } } }], [import("./modules/files/files.controller"), { "FilesController": { "upload": { type: [t["./modules/files/vo/file.vo"].FileVo] }, "download": {}, "findOne": {} } }], [import("./modules/menu-items/menu-items.controller"), { "MenuItemsController": { "create": { type: t["./modules/menu-items/dto/create-menu-item.dto"].CreateMenuItemDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/menu-items/dto/update-menu-item.dto"].UpdateMenuItemDto }, "remove": { type: String } } }], [import("./modules/notifications/notifications.controller"), { "NotificationsController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/notifications/dto/update-notification.dto"].UpdateNotificationDto }, "remove": { type: String } } }], [import("./modules/permissions/permissions.controller"), { "PermissionsController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }], [import("./modules/positions/positions.controller"), { "PositionsController": { "create": { type: t["./modules/positions/dto/create-position.dto"].CreatePositionDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/positions/dto/update-position.dto"].UpdatePositionDto }, "remove": { type: String } } }], [import("./modules/roles/roles.controller"), { "RolesController": { "create": { type: String }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: String }, "remove": { type: String } } }], [import("./modules/settings/settings.controller"), { "SettingsController": { "create": {}, "findMany": {}, "findOneById": {}, "findOneByKey": {}, "update": {}, "enable": {}, "disable": {}, "remove": {}, "sort": {} } }], [import("./modules/sse/sse.controller"), { "SseController": { "sendNotification": {} } }], [import("./modules/user-traffic-records/user-traffic-records.controller"), { "UserTrafficRecordsController": { "create": { type: t["./modules/user-traffic-records/dto/create-user-traffic-record.dto"].CreateUserTrafficRecordDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/user-traffic-records/dto/update-user-traffic-record.dto"].UpdateUserTrafficRecordDto }, "remove": { type: String } } }], [import("./modules/user-traffics/user-traffics.controller"), { "UserTrafficsController": { "create": { type: t["./modules/user-traffics/dto/create-user-traffic.dto"].CreateUserTrafficDto }, "findAll": { type: String }, "findOne": { type: String }, "update": { type: t["./modules/user-traffics/dto/update-user-traffic.dto"].UpdateUserTrafficDto }, "remove": { type: String } } }], [import("./modules/app.controller"), { "AppController": { "getApp": {}, "getVersion": {}, "getRedirect": {}, "getCurrentLang": {} } }], [import("./shared/cos/cos.controller"), { "CosController": { "uploadToCos": { type: [t["./modules/files/vo/file.vo"].FileVo] } } }], [import("./modules/user-settings/user-settings.controller"), { "UserSettingsController": { "create": {}, "findMany": {}, "findOneById": {}, "findOneByKey": {}, "update": {}, "enable": {}, "disable": {}, "remove": {} } }]] } };
};