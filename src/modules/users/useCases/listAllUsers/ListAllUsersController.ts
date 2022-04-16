import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  private listAllUsersUseCase: ListAllUsersUseCase;

  constructor(listAllUsersUseCase: ListAllUsersUseCase) {
    this.listAllUsersUseCase = listAllUsersUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    console.log(user_id);

    const all = this.listAllUsersUseCase.execute({ user_id });

    return response.json(all);
  }
}

export { ListAllUsersController };
