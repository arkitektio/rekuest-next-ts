import { useEffect } from "react";
import {
  AcknowledgeDocument,
  AcknowledgeMutation,
  AcknowledgeMutationVariables,
  AssignDocument,
  AssignMutation,
  AssignMutationVariables,
  AssignationEvent,
  AssignationEventFragment,
  PostmanAssignationFragment,
  PostmanAssignationFragmentDoc,
  PostmanReservationFragment,
  PostmanReservationFragmentDoc,
  ReservationEvent,
  ReservationEventFragment,
  ReserveDocument,
  ReserveMutation,
  ReserveMutationVariables,
  UnassignDocument,
  UnassignMutation,
  UnassignMutationVariables,
  UnreserveDocument,
  UnreserveMutation,
  UnreserveMutationVariables,
  WatchAssignationsDocument,
  WatchAssignationsSubscription,
  WatchAssignationsSubscriptionVariables,
  WatchReservationsDocument,
  WatchReservationsSubscription,
  WatchReservationsSubscriptionVariables,
} from "../api/graphql";
import { useRekuest } from "../RekuestContext";
import { usePostman } from "./PostmanContext";
import { DocumentNode } from "@apollo/client";
import {
  AckVariables,
  AssignVariables,
  ReserveVariables,
  UnassignVariables,
  UnreserveVariables,
} from "./types";

export type GraphQLPostmanProps = {
  instanceId: string;
  onAssignUpdate?: (assign: AssignationEventFragment) => void;
  onReserveUpdate?: (reserve: ReservationEventFragment) => void;
  watchReservationsDocument?: DocumentNode;
  watchAssignationsDocument?: DocumentNode;
  updateReservationFragments?: DocumentNode[];
  updateAssignationFragments?: DocumentNode[];
  onReserveSuccess?: (reserve: PostmanReservationFragment) => void;
  onAssignSuccess?: (assign: PostmanAssignationFragment) => void;
  onUnassignSuccess?: (assign: { id: string }) => void;
  onUnreserveSuccess?: (reserve: { id: string }) => void;
  onAckSuccess?: (reserve: PostmanAssignationFragment) => void;
};

export const GraphQLPostman = ({
  watchAssignationsDocument = WatchAssignationsDocument,
  watchReservationsDocument = WatchReservationsDocument,
  updateReservationFragments = [PostmanReservationFragmentDoc],
  updateAssignationFragments = [PostmanAssignationFragmentDoc],
  ...props
}: GraphQLPostmanProps) => {
  const { setPostman } = usePostman();
  const { client } = useRekuest();

  useEffect(() => {
    if (client) {
      console.log("Subscribing to Postman Reservations");
      const subscription = client
        ?.subscribe<
          WatchReservationsSubscription,
          WatchReservationsSubscriptionVariables
        >({
          query: watchReservationsDocument,
          variables: {
            instanceId: props.instanceId,
          },
        })
        .subscribe((res) => {
          console.error("Received", res);

          let update = res.data?.reservations;

          if (update) {
            props.onReserveUpdate && props.onReserveUpdate(update);
            for (let fragment of updateReservationFragments) {
              client.cache.updateFragment(
                {
                  id: `Reservation:${update.id}`,
                  fragment: fragment,
                },
                (data) => {
                  console.log("Update Fragment", data);
                  return {
                    ...data,
                    ...update,
                  };
                }
              );
            }
          }
        });

      return () => subscription.unsubscribe();
    }
  }, [client]);

  useEffect(() => {
    if (client) {
      console.log("Subscribing to Postman Assignation");
      const subscription = client
        ?.subscribe<
          WatchAssignationsSubscription,
          WatchAssignationsSubscriptionVariables
        >({
          query: watchAssignationsDocument,
          variables: {
            instanceId: props.instanceId,
          },
        })
        .subscribe((res) => {
          console.log(res);

          let update = res.data?.assignations;

          if (update) {
            props.onAssignUpdate && props.onAssignUpdate(update);
            for (let fragment of updateAssignationFragments) {
              client.cache.updateFragment(
                {
                  id: `Assignation:${update.id}`,
                  fragment: fragment,
                },
                (data) => {
                  console.log("Update Fragment", data);
                  return {
                    ...data,
                    ...update,
                  };
                }
              );
            }
          }
        });

      return () => subscription.unsubscribe();
    }
  }, [client]);

  useEffect(() => {
    if (client) {
      setPostman({
        assign: async (variables: AssignVariables) => {
          let x = await client.mutate<AssignMutation, AssignMutationVariables>({
            variables: variables,
            mutation: AssignDocument,
          });
          if (!x.data?.assign) throw new Error("No data received");
          props.onAssignSuccess && props.onAssignSuccess(x.data?.assign);
          return x.data.assign;
        },
        reserve: async (variables: ReserveVariables) => {
          let x = await client.mutate<
            ReserveMutation,
            ReserveMutationVariables
          >({
            variables: { ...variables, instanceId: props.instanceId },
            mutation: ReserveDocument,
          });

          client.refetchQueries({
            include: ["Reservations"],
          });
          console.log("Reserve", x);
          if (!x.data?.reserve) throw new Error("No data received");
          props.onReserveSuccess && props.onReserveSuccess(x.data?.reserve);
          return x.data.reserve;
        },
        unassign: async (variables: UnassignVariables) => {
          let x = await client.mutate<
            UnassignMutation,
            UnassignMutationVariables
          >({
            variables: variables,
            mutation: UnassignDocument,
          });
          if (!x.data?.unassign) throw new Error("No data received");
          props.onUnassignSuccess && props.onUnassignSuccess(x.data?.unassign);
          return x.data.unassign;
        },
        unreserve: async (variables: UnreserveVariables) => {
          let x = await client.mutate<
            UnreserveMutation,
            UnreserveMutationVariables
          >({
            variables: variables,
            mutation: UnreserveDocument,
          });
          client.refetchQueries({
            include: ["Reservations"],
          });
          if (!x.data?.unreserve) throw new Error("No data received");
          props.onUnreserveSuccess &&
            props.onUnreserveSuccess(x.data?.unreserve);
          return x.data.unreserve;
        },
        ack: async (variables: AckVariables) => {
          let x = await client.mutate<
            AcknowledgeMutation,
            AcknowledgeMutationVariables
          >({
            variables: variables,
            mutation: AcknowledgeDocument,
          });
          if (!x.data?.ack) throw new Error("No data received");
          props.onAckSuccess && props.onAckSuccess(x.data?.ack);
          return x.data.ack;
        },
      });
    }
  }, [client]);

  return <> </>;
};
