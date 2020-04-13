import { TenantState } from './tenant.reducer'

export const getTenants = (state: TenantState) => state.tenants

export const getError = (state: TenantState) => state.error
