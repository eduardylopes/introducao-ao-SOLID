import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  private showUserProfileUseCase: ShowUserProfileUseCase;

  constructor(showUserProfileUseCase: ShowUserProfileUseCase) {
    this.showUserProfileUseCase = showUserProfileUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    const user = this.showUserProfileUseCase.execute({ user_id });

    return response.status(200).json(user);
  }
}

export { ShowUserProfileController };
