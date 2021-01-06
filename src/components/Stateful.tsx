import { defineComponent, ref } from 'vue'
import { User } from '../model/User.face'
export default defineComponent({
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  },
  setup(popps) {
    const age = ref(popps.user.age)
    return (
      <div>
        <p>
          name：{popps.user.name} -- age：{age}
        </p>
        <button
          onClick={() => {
            age.value++
          }}
        >
          add age
        </button>
      </div>
    )
  }
})
