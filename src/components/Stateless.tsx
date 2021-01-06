import { User } from '../model/User.face'
export default ({ name, age }: User) => {
  return (
    <div>
      <p>无状态组件</p>
      name：{name}
      age：{age}
    </div>
  )
}
