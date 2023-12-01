import {createPrismic} from "@prismicio/vue";

const prismic = createPrismic({endpoint: 'https://reason-tech-task.cdn.prismic.io/api/v2'});
export default prismic;