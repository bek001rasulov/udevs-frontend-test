import {OrderCardBody, OrderCardFooter, OrderCardHeader, OrderCardWrapper} from "./style.ts";
import {Button, Flex, Stack, Text} from "@mantine/core";
import IconInfo from "../../../../assets/alert-circle-icon.svg?react";
import IconPayme from "../../../../assets/payme-icon.svg?react";
import IconStore from "../../../../assets/store-icon.svg?react";
import IconClock from "../../../../assets/clock-filled-icon.svg?react";
import IconClose from "../../../../assets/close-icon.svg?react";
import IconDone from "../../../../assets/done-icon.svg?react"

const OrderCard = ({data} :any) => {
    return (
        <OrderCardWrapper>
            <OrderCardHeader>
                <Flex gap={8} align='center'>
                    <Text size={'18px'} fw={700}>ID: {data.id}</Text>
                    <IconInfo/>
                </Flex>
                <Flex gap={8} align='center'>
                    <Text size={'12px'} fw={500} c={'#6E8BB7'}>{data.total_price} сум</Text>
                    <IconPayme/>
                    <IconStore/>
                </Flex>
            </OrderCardHeader>
            <OrderCardBody>
                {
                    data.orders.map((item, index) => (
                        <Flex gap={4} align="flex-start" key={index}>
                            <Text size={'14px'} fw={500} style={{lineHeight: '21px'}}>{item.quantity} x</Text>
                            <Stack gap={2}>
                                <Text size={'14px'} fw={500} style={{lineHeight: '21px'}}>{item.name}</Text>
                                {
                                    item?.details
                                        ?
                                        item.details.map((detail, index) => (
                                            <Text size={'12px'} fw={400} c={'#48535B'} key={index}>{detail}</Text>
                                        ))
                                        : null
                                }
                            </Stack>
                        </Flex>
                    ))
                }

                <Flex gap={6} align='center' style={{placeContent: 'flex-end'}}>
                    <IconClock/>
                    <Text size={'12px'} fw={500} c={'#6E8BB7'}>15:22</Text>
                </Flex>
            </OrderCardBody>
            <OrderCardFooter>
                <Flex gap={6} align='center' justify={'space-around'}>
                    <Button
                        w={140}
                        h={36}
                        justify={'center'}
                        leftSection={<IconClose/>}
                        variant={"default"}
                        color={'#F76659'}
                        radius={6}
                        styles={{
                            root: {borderColor: '#E5E9EB'},
                            section: {marginRight: '4px'},
                            label: {color: '#F76659', fontWeight: 500},

                        }}
                    >
                        Отменить
                    </Button>
                    <Button
                        w={140}
                        h={36}
                        justify={'center'}
                        leftSection={<IconDone/>}
                        radius={6}
                        color={"#0E73F6"}
                        styles={{
                            root: {borderColor: '#E5E9EB'},
                            section: {marginRight: '4px'},
                            label: {fontWeight: 500},
                        }}
                    >
                        Принять
                    </Button>
                </Flex>
            </OrderCardFooter>
        </OrderCardWrapper>
    );
};

export default OrderCard;