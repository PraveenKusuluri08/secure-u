const InputFieldStyleClassName = "appreance-none block rounded border px-4 py-3 mb-3 text-gray-900 focus:outline-gray-400 focus:bg-white dark:text-veryDark"
const LabelClassName =" block uppercase tracking-wide text-gray-800 text-sm font-bold mb-3 dark:text-veryDark font-bold"

const UserRoleEnum={
    ADMIN:"ADMIN",
    USER:"USER"
}

const AvailableRoles = Object.values(UserRoleEnum)

export {InputFieldStyleClassName,LabelClassName,UserRoleEnum,AvailableRoles}