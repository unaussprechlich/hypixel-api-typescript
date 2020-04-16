export default interface AbstractResponse{
    success : boolean,
    cause? : string,
    throttle?: boolean,
}
