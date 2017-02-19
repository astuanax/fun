import existy from './existy'

export const truthy = (x) => { return (x !== false) && existy(x) }

export default truthy