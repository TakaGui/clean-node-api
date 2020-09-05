import { IController } from '../protocols/controller'
import { IHttpResponse, IHttpRequest } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController implements IController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(`${field}`))
      }
    }
  }
}
