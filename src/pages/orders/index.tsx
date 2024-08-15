import {OrdersPage, OrdersPageContent, OrdersPageHeader, OrderStage} from "./style.ts";
import {Box, Flex, Grid, Input, Select, Stack} from "@mantine/core";
import IconSearch from "../../assets/search-icon.svg?react";
import IconShoppingList from "../../assets/shopping-list-icon.svg?react";
import IconArrowDown from "../../assets/chevron-down-icon.svg?react";
import IconClock from "../../assets/clock-icon.svg?react";
import OrderCard from "./components/order-card";
import {inProgressOrderData, inRoadOrderData, newOrderData, readyOrderData} from "../../constants/mockData.ts";

const Orders = () => {
    return (
        <OrdersPage>
            <OrdersPageHeader>
                <Input
                    placeholder="Поиск по ID"
                    leftSection={<IconSearch/>}
                    leftSectionWidth={40}
                    radius={6}
                    w={240}
                    h={36}
                />

                <Flex gap={16}>
                    <Select
                        value={'Всего: 115'}
                        data={['Всего: 115']}
                        radius={6}
                        leftSection={<IconShoppingList/>}
                        leftSectionWidth={44}
                        rightSection={<IconArrowDown/>}
                        rightSectionWidth={36}
                        w={149}
                        h={36}
                    />
                    <Box className="time">
                        <IconClock/>
                        <span>45:08</span>
                    </Box>
                </Flex>
            </OrdersPageHeader>
            <OrdersPageContent>
                <Grid gutter={16}>
                    <Grid.Col span={3}>
                        <OrderStage bg={"#0E73F6"}>
                            <Box className="header">
                                Новый ({newOrderData.length})
                            </Box>
                            <Stack w={'100%'} px={8} pb={8}>
                                {
                                    newOrderData.map((data, index) => (
                                        <OrderCard
                                            variant={'new'}
                                            footer={true}
                                            key={index}
                                            data={data}
                                        />
                                    ))
                                }
                            </Stack>
                        </OrderStage>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <OrderStage bg={"#F8C51B"}>
                            <Box className="header">
                                Заготовка ({inProgressOrderData.length})
                            </Box>
                            <Stack w={'100%'} px={8} pb={8}>
                                {
                                    inProgressOrderData.map((data, index) => (
                                        <OrderCard
                                            key={index}
                                            data={data}
                                            footer={index === 0}
                                            variant={"inprogress"}
                                        />
                                    ))
                                }
                            </Stack>
                        </OrderStage>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <OrderStage bg={"#22C348"}>
                            <Box className="header">
                                Готов ({readyOrderData.length})
                            </Box>
                            <Stack w={'100%'} px={8} pb={8}>
                                {
                                    readyOrderData.map((data, index) => (
                                        <OrderCard
                                            key={index}
                                            data={data}
                                            footer={index === readyOrderData.length - 1}
                                            variant={"ready"}
                                        />
                                    ))
                                }
                            </Stack>
                        </OrderStage>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <OrderStage bg={"#1AC19D"}>
                            <Box className="header">
                                Курьер в пути ({inRoadOrderData.length})
                            </Box>
                            <Stack w={'100%'} px={8} pb={8}>
                                {
                                    inRoadOrderData.map((data, index) => (
                                        <OrderCard
                                            key={index}
                                            data={data}
                                        />
                                    ))
                                }
                            </Stack>
                        </OrderStage>
                    </Grid.Col>
                </Grid>
            </OrdersPageContent>
        </OrdersPage>
    );
};

export default Orders;
