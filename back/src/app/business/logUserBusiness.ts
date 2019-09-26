import {LogUserDTO} from "../models/dto/logUserDTO";
import {ArgumentException} from "../../exceptions/argumentException";
import LogUser from "../models/logUser";
import {LogUserViewModel} from "../models/viewModel/logUserViewModel";

export class LogUserBusiness {
    public async create(logUserDTO: LogUserDTO): Promise<LogUserViewModel> {
        if (!logUserDTO.operation || logUserDTO.operation == "") throw new ArgumentException("Operação obrigatória!");
        if (!logUserDTO.message || logUserDTO.message == "") throw new ArgumentException("Mensagem obrigatória!");

        let logUser = await LogUser.create({
            user_id: logUserDTO.userId,
            operation: logUserDTO.operation,
            message: logUserDTO.message
        });

        return await logUser.asViewModel();
    }

    public async getAllByUerId(userId: number): Promise<Array<LogUserViewModel>> {
        let logs = await LogUser.findAll({
            where: {
                user_id: userId
            }
        });
        let logsVM: Array<LogUserViewModel> = new Array<LogUserViewModel>();
        for (let log of logs) logsVM.push(await log.asViewModel());
        return logsVM;
    }
}
