import {CommandArgument} from "../CommandArgument";

export class NumberArgument extends CommandArgument<number> {
    default = 0;

    read(as, at, args, index) {
        return args[index].value;
    };

    blindCheck(args, index) {
        return {pass: args[index] && args[index].type === "number", index: index + 1};
    };

    toString() {
        return "number";
    };
}