export default interface AbstractResponse{
    success : number,
    cause? : string,
    throttle?: boolean,
}
