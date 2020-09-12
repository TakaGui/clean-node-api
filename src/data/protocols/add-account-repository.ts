import { IAddAccountModel } from '../../domain/use_cases/add-account'
import { IAccountModel } from '../../domain/models/account'

export interface IAddAccountRepository {
  add (accountData: IAddAccountModel): Promise<IAccountModel>
}
