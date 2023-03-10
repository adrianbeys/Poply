<template >
    <div id="chatbox" class="pa-8 mx-auto">
        <v-container class="fill-height pa-0">
            <v-row class="no-gutters elevation-4">
                <v-col cols="12" sm="3">
                    <h2 style="margin-bottom:10px;">Chat</h2>
                    <div style="background-color:#1a1a1a; border-radius: 10px;">
                    <v-list class="overflow-y-auto" style="background-color: transparent; " v-model="activeChat"
                        v-for="(item, index) in parents">

                        <v-virtual-scroll :items="items" :item-height="50" height="300">
                            <v-list-item style="background-color: transparent; color: white; border-radius: 20px;" :key="`parent${index}`"
                                :value="item.id">
                              

                                <v-list-item-title v-text="item.title" />
                                <v-list-item-subtitle v-text="'Test message'" />
                            </v-list-item>
                        </v-virtual-scroll>
                        <v-divider :key="`chatDivider${index}`" class="my-0" color="transparent" />
                    </v-list>
                </div>
                </v-col>
                <v-col cols="auto" class="flex-grow-1">
                    <v-card flat class="d-flex flex-column fill-height" style="background-color: grey;">
                        <v-card-title style="color:white;">
                            Example chat
                        </v-card-title>
                        <v-card-text class="flex-grow-1 overflow-y-auto ma-2">
                            <template v-for="(msg, i) in messages">
                                <div :class="{ 'd-flex flex-row-reverse': msg.me }">
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-hover>
                                                <v-chip :color="msg.me ? 'blue' : 'white'" dark
                                                    style="height:auto;white-space: normal; background:#262626"
                                                    class="pa-4 mb-2" v-on="on">
                                                    <div id="content">{{ msg.content }}</div>
                                                    <sub class="ml-2" style="font-size: 0.5rem; color: white;">{{
                                                        msg.created_at }}</sub>
                                                </v-chip>
                                            </v-hover>
                                        </template>
                                    </v-menu>
                                </div>
                            </template>
                        </v-card-text>
                        <div class="d-flex pa-6">
                            <v-textarea density="comfortable" placeholder="Write a message" type="text" rows="3"
                            style="margin-right: 20px"
                               variant="solo" />
                               <v-btn style="margin-top: 15px; background-color: green; color: white;" icon="mdi-send"></v-btn>
                      </div>
                        
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    data: () => ({
        activeChat: 1,
        parents: [
            {
                id: 1,
                title: "john doe",
                active: true
            },
            {
                id: 3,
                title: "scarlett",
                active: false
            },
            {
                id: 4,
                title: "scarlett",
                active: false
            },
            {
                id: 5,
                title: "scarlett",
                active: false
            },
            {
                id: 6,
                title: "scarlett",
                active: false
            },
            {
                id: 7,
                title: "scarlett",
                active: false
            },
            {
                id: 8,
                title: "scarlett",
                active: false
            },
            {
                id: 9,
                title: "scarlett",
                active: false
            },
            {
                id: 10,
                title: "scarlett",
                active: false
            },

        ],
        messages: [
            {
                content: "lorem ipsum",
                me: true,
                created_at: "11:11am"
            },
            {
                content: "dolor",
                me: false,
                created_at: "11:11am"
            },
            {
                content: "dolor",
                me: false,
                created_at: "11:11am"
            },
            {
                content: "dolor",
                me: false,
                created_at: "11:11am"
            },
            {
                content: "dolor",
                me: true,
                created_at: "11:11am"
            },
            {
                content: "dolor",
                me: false,
                created_at: "11:12am"
            },
            {
                content: "dolor",
                me: false,
                created_at: "11:14am"
            }
        ],
    })

}
</script>


<style>


#content {
    color: white;
}
</style>