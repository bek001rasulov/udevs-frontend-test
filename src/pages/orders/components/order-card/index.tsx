import {OrderCardBody, OrderCardFooter, OrderCardHeader, OrderCardWrapper, OrderComments} from "./style.ts";
import {Badge, Button, Flex, Stack, Text} from "@mantine/core";
import IconInfo from "../../../../assets/alert-circle-icon.svg?react";
import IconPayme from "../../../../assets/payme-icon.svg?react";
import IconStore from "../../../../assets/store-icon.svg?react";
import IconClock from "../../../../assets/clock-filled-icon.svg?react";
import IconClose from "../../../../assets/close-icon.svg?react";
import IconDone from "../../../../assets/done-icon.svg?react";
import IconArrowDown from "../../../../assets/comment-arrow-down-icon.svg?react"

const OrderCard = ({data, variant, footer}: any) => {
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
            <OrderCardBody variant={variant}>
                {
                    data.orders.map((item: any, index: number) => (
                        <Flex gap={4} align="flex-start" key={index}>
                            <Text size={'14px'} fw={500} style={{lineHeight: '21px'}}>{item.quantity} x</Text>
                            <Stack gap={2}>
                                <Text size={'14px'} fw={500} style={{lineHeight: '21px'}}>{item.name}</Text>
                                {
                                    item?.details
                                        ?
                                        item.details.map((detail: any, index: number) => (
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
            {
                footer &&
                <OrderCardFooter variant={variant}>
                    {
                        variant === 'new'
                            ?
                            (
                                <Flex gap={6} align='center' justify={'space-around'}>
                                    <Button
                                        fullWidth
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
                                        fullWidth
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
                            )
                            :
                            (
                                <>
                                    {
                                        data.comments
                                        &&
                                        <OrderComments>
                                            <Flex gap={4} align='end'>
                                                <Text size={'14px'} fw={500} c={"#6E8BB7"} style={{lineHeight: '21px'}}>Коментарии(1)</Text>
                                                <Badge color="#0E73F6" radius={16} px={4} fw={500} h={18} style={{fontSize: '12px'}}>+3</Badge>
                                            </Flex>
                                            <IconArrowDown/>
                                        </OrderComments>
                                    }

                                    <Button
                                        className="ready-btn"
                                        fullWidth
                                        variant={'outline'}
                                        h={36}
                                        justify={'center'}
                                        leftSection={variant === "inprogress" && <IconDone/>}
                                        radius={6}
                                        color={"#0E73F6"}
                                        styles={{
                                            section: {marginRight: '4px'},
                                            label: {fontWeight: 500},
                                        }}
                                    >
                                        {
                                            variant === "inprogress"
                                                ?
                                                "Готово"
                                                :
                                                "Завершить"
                                        }
                                    </Button>
                                </>

                            )
                    }

                </OrderCardFooter>
            }

        </OrderCardWrapper>
    );
};

export default OrderCard;
