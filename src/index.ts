import {MikroORM} from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
// @ts-ignore
const main = async () => {

    //@ts-ignore
    const orm = await MikroORM.init(microConfig);


    const post = orm.em.create(Post, {title:"Post First"})
    await orm.em.persistAndFlush(post);

    console.log('=================SQL-2')
    await orm.em.nativeInsert(Post, {title: "Post Two"})
}
//@ts-ignore
main().catch((err)=> {
    console.error(err)
});
