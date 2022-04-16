import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  private turnUserAdminUseCase: TurnUserAdminUseCase;

  constructor(turnUserAdminUseCase: TurnUserAdminUseCase) {
    this.turnUserAdminUseCase = turnUserAdminUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = this.turnUserAdminUseCase.execute({ user_id });

    if (!user) {
      return response.status(404).json({ error: "User not found." });
    }

    return response.status(200).json(user);
  }
}

export { TurnUserAdminController };
