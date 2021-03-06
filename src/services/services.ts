/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { AxiosRequestConfig } from "axios";
import { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
import {
  AccountAuthority,
  AccountGroup,
  AccountInformation,
  AreaInformations,
  AttentionRecord,
  CityInformations,
  CompanyInformation,
  DeleteAccountInfosP0QueryParams,
  DeliveryRecord,
  DirectionTags,
  EducationExperience,
  FilterInformation,
  GarnerRecord,
  GetAdminAccountauthoritiesQueryParams,
  GetAdminAccountgroupsQueryParams,
  GetAdminAccountsQueryParams,
  GetAreaInformationsQueryParams,
  GetCompanyInfosP0BigDataQueryParams,
  GetCompanyInfosP0DeliveryRecordsQueryParams,
  GetCompanyInfosP0PositionInfosQueryParams,
  GetCompanyInfosP0SawMeRecordsQueryParams,
  GetCompanyInfosPositionInfosQueryParams,
  GetCompanyInfosQueryParams,
  GetDirectionTagsQueryParams,
  GetHrInfosP0InspectionRecordsQueryParams,
  GetHrInfosQueryParams,
  GetUserInfosP0AttentionRecordsQueryParams,
  GetUserInfosP0DeliveryRecordsQueryParams,
  GetUserInfosP0EduExperiencesQueryParams,
  GetUserInfosP0GarnerRecordsQueryParams,
  GetUserInfosP0InspectionRecordsQueryParams,
  GetUserInfosP0JobExpectationsQueryParams,
  GetUserInfosP0ProjectExperiencesQueryParams,
  GetUserInfosP0SawMeRecordsQueryParams,
  GetUserInfosP0WorkExperiencesQueryParams,
  GetUserInfosQueryParams,
  GetVerificationCodeQueryParams,
  HrInformation,
  HrInspectionRecord,
  JobExpectation,
  PositionInformation,
  PositionTypes,
  ProjectExperience,
  UserInformation,
  UserInspectionRecord,
  WorkExperience
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

/**
 *
 * ????????????
 */
export const deleteAccountInfosP0 = (
  /**
   *
   * ??????ID
   */
  accountInfoId: string,
  queryParams?: DeleteAccountInfosP0QueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAccountInfosP0.key, { accountInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAccountInfosP0.key = "/accountInfos/{accountInfoId}";

/**
 *
 * ????????????????????????
 */
export const deleteAdminAccountauthoritiesP0 = (
  /**
   *
   * ????????????ID
   */
  accountauthorityid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAdminAccountauthoritiesP0.key, { accountauthorityid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAdminAccountauthoritiesP0.key =
  "/admin/accountauthorities/{accountauthorityid}";

/**
 *
 * ???????????????
 */
export const deleteAdminAccountgroupsP0 = (
  /**
   *
   * ?????????ID
   */
  accountgroupid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAdminAccountgroupsP0.key, { accountgroupid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAdminAccountgroupsP0.key = "/admin/accountgroups/{accountgroupid}";

/**
 *
 * ??????????????????
 */
export const deleteAdminAccountsP0 = (
  /**
   *
   * ??????ID
   */
  accountId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteAdminAccountsP0.key, { accountId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteAdminAccountsP0.key = "/admin/accounts/{accountId}";

/**
 *
 * ??????????????????
 */
export const deleteCompanyInfosP0PositionInfosP1 = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  /**
   *
   * ????????????ID
   */
  positionInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteCompanyInfosP0PositionInfosP1.key, {
      companyInfoId,
      positionInfoId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteCompanyInfosP0PositionInfosP1.key =
  "/companyInfos/{companyInfoId}/positionInfos/{positionInfoId}";

/**
 *
 * ??????????????????
 */
export const deleteHrInfosP0InspectionRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  hrInfoId: string,
  /**
   *
   * ????????????ID
   */
  inspectionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: HrInspectionRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteHrInfosP0InspectionRecordsP1.key, {
      hrInfoId,
      inspectionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteHrInfosP0InspectionRecordsP1.key =
  "/hrInfos/{hrInfoId}/inspectionRecords/{inspectionRecordId}";

/**
 *
 * ??????????????????
 */
export const deleteUserInfosP0AttentionRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  attentionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0AttentionRecordsP1.key, {
      userInfoId,
      attentionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0AttentionRecordsP1.key =
  "/userInfos/{userInfoId}/attentionRecords/{attentionRecordId}";

/**
 *
 * ??????????????????
 */
export const deleteUserInfosP0DeliveryRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  deliveryRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0DeliveryRecordsP1.key, {
      userInfoId,
      deliveryRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0DeliveryRecordsP1.key =
  "/userInfos/{userInfoId}/deliveryRecords/{deliveryRecordId}";

/**
 *
 * ??????????????????
 */
export const deleteUserInfosP0EduExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  eduExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0EduExperiencesP1.key, {
      userInfoId,
      eduExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0EduExperiencesP1.key =
  "/userInfos/{userInfoId}/eduExperiences/{eduExperienceId}";

/**
 *
 * ??????????????????
 */
export const deleteUserInfosP0GarnerRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  garnerRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0GarnerRecordsP1.key, {
      userInfoId,
      garnerRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0GarnerRecordsP1.key =
  "/userInfos/{userInfoId}/garnerRecords/{garnerRecordId}";

/**
 *
 * ??????????????????
 */
export const deleteUserInfosP0InspectionRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  inspectionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: UserInspectionRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0InspectionRecordsP1.key, {
      userInfoId,
      inspectionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0InspectionRecordsP1.key =
  "/userInfos/{userInfoId}/inspectionRecords/{inspectionRecordId}";

/**
 *
 * ??????????????????
 */
export const deleteUserInfosP0JobExpectationsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  jobExpectationId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0JobExpectationsP1.key, {
      userInfoId,
      jobExpectationId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0JobExpectationsP1.key =
  "/userInfos/{userInfoId}/jobExpectations/{jobExpectationId}";

/**
 *
 * ??????????????????
 */
export const deleteUserInfosP0ProjectExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  projectExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: ProjectExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0ProjectExperiencesP1.key, {
      userInfoId,
      projectExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0ProjectExperiencesP1.key =
  "/userInfos/{userInfoId}/projectExperiences/{projectExperienceId}";

/**
 *
 * ??????????????????
 */
export const deleteUserInfosP0WorkExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  workExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.deleteRequest(
    template(deleteUserInfosP0WorkExperiencesP1.key, {
      userInfoId,
      workExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
deleteUserInfosP0WorkExperiencesP1.key =
  "/userInfos/{userInfoId}/workExperiences/{workExperienceId}";

/**
 *
 * ??????????????????????????????
 */
export const getAdminAccountauthorities = (
  queryParams?: GetAdminAccountauthoritiesQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority[];
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAdminAccountauthorities.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountauthorities.key = "/admin/accountauthorities";

/**
 *
 * ????????????????????????
 */
export const getAdminAccountauthoritiesP0 = (
  /**
   *
   * ????????????ID
   */
  accountauthorityid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getAdminAccountauthoritiesP0.key, { accountauthorityid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountauthoritiesP0.key =
  "/admin/accountauthorities/{accountauthorityid}";

/**
 *
 * ???????????????????????????
 */
export const getAdminAccountgroups = (
  queryParams?: GetAdminAccountgroupsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: {
      totalCount: number;
      accountGroups: AccountGroup[];
    };
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAdminAccountgroups.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountgroups.key = "/admin/accountgroups";

/**
 *
 * ?????????????????????
 */
export const getAdminAccountgroupsP0 = (
  /**
   *
   * ?????????ID
   */
  accountgroupid: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getAdminAccountgroupsP0.key, { accountgroupid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountgroupsP0.key = "/admin/accountgroups/{accountgroupid}";

/**
 *
 * ????????????????????????
 */
export const getAdminAccounts = (
  queryParams?: GetAdminAccountsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: {
      totalCount: number;
      accountInformations: AccountInformation[];
    };
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAdminAccounts.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccounts.key = "/admin/accounts/";

/**
 *
 * ??????????????????
 */
export const getAdminAccountsP0 = (
  /**
   *
   * ??????ID
   */
  accountId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getAdminAccountsP0.key, { accountId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAdminAccountsP0.key = "/admin/accounts/{accountId}";

/**
 *
 * ??????????????????
 */
export const getAreaInformations = (
  queryParams?: GetAreaInformationsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: AreaInformations;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getAreaInformations.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getAreaInformations.key = "/areaInformations";

/**
 *
 * ??????????????????
 */
export const getCityInformations = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: CityInformations;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getCityInformations.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCityInformations.key = "/cityInformations";

/**
 *
 * ????????????????????????
 */
export const getCompanyInfos = (
  queryParams?: GetCompanyInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      companyInformations: CompanyInformation[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getCompanyInfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfos.key = "/companyInfos";

/**
 *
 * ??????????????????
 */
export const getCompanyInfosP0 = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: CompanyInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0.key, { companyInfoId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0.key = "/companyInfos/{companyInfoId}";

/**
 *
 * ?????????????????????
 */
export const getCompanyInfosP0BigData = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  queryParams?: GetCompanyInfosP0BigDataQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ?????????????????????
     *
     */
    body: {
      /**
       *
       * ????????????
       *
       */
      date: string;
      /**
       *
       * ??????????????????
       *
       */
      deliveryRecordCount: number;
      /**
       *
       * ??????????????????
       *
       */
      inspectionRecordCount: number;
      /**
       *
       * ??????????????????
       *
       */
      onlineCommunicateCount: number;
    }[];
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0BigData.key, { companyInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0BigData.key = "/companyInfos/{companyInfoId}/bigData";

/**
 *
 * ????????????????????????
 */
export const getCompanyInfosP0DeliveryRecords = (
  companyInfoId: string,
  queryParams?: GetCompanyInfosP0DeliveryRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      deliveryRecords: DeliveryRecord[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0DeliveryRecords.key, { companyInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0DeliveryRecords.key =
  "/companyInfos/{companyInfoId}/deliveryRecords";

/**
 *
 * ????????????????????????
 */
export const getCompanyInfosP0PositionInfos = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  queryParams?: GetCompanyInfosP0PositionInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      positionInformations: PositionInformation[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0PositionInfos.key, { companyInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0PositionInfos.key =
  "/companyInfos/{companyInfoId}/positionInfos";

/**
 *
 * ??????????????????
 */
export const getCompanyInfosP0PositionInfosP1 = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  /**
   *
   * ????????????ID
   */
  positionInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0PositionInfosP1.key, {
      companyInfoId,
      positionInfoId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0PositionInfosP1.key =
  "/companyInfos/{companyInfoId}/positionInfos/{positionInfoId}";

/**
 *
 * ????????????????????????
 */
export const getCompanyInfosP0SawMeRecords = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  queryParams?: GetCompanyInfosP0SawMeRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ????????????????????????
       *
       */
      hrInspectionRecords: UserInspectionRecord[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getCompanyInfosP0SawMeRecords.key, { companyInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosP0SawMeRecords.key =
  "/companyInfos/{companyInfoId}/sawMeRecords";

/**
 *
 * ????????????????????????
 */
export const getCompanyInfosPositionInfos = (
  queryParams?: GetCompanyInfosPositionInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      positionInformations: PositionInformation[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getCompanyInfosPositionInfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getCompanyInfosPositionInfos.key = "/companyInfos/positionInfos";

/**
 *
 * ??????????????????
 */
export const getDirectionTags = (
  queryParams?: GetDirectionTagsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: DirectionTags;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getDirectionTags.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getDirectionTags.key = "/directionTags";

/**
 *
 * ??????????????????
 */
export const getFilterInformation = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: FilterInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getFilterInformation.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getFilterInformation.key = "/filterInformation";

/**
 *
 * ????????????????????????
 */
export const getHrInfos = (
  queryParams?: GetHrInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * HR????????????
       *
       */
      HrInformations: HrInformation[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getHrInfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrInfos.key = "/hrInfos";

/**
 *
 * ??????????????????
 */
export const getHrInfosP0 = (
  /**
   *
   * ????????????ID
   */
  hrInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: HrInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getHrInfosP0.key, { hrInfoId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrInfosP0.key = "/hrInfos/{hrInfoId}";

/**
 *
 * ????????????????????????
 */
export const getHrInfosP0InspectionRecords = (
  /**
   *
   * ????????????ID
   */
  hrInfoId: string,
  queryParams?: GetHrInfosP0InspectionRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
      /**
       *
       * ????????????????????????
       *
       */
      userInspectionRecords: UserInspectionRecord[];
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getHrInfosP0InspectionRecords.key, { hrInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrInfosP0InspectionRecords.key = "/hrInfos/{hrInfoId}/inspectionRecords";

/**
 *
 * ??????????????????
 */
export const getHrInfosP0InspectionRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  hrInfoId: string,
  /**
   *
   * ????????????ID
   */
  inspectionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: HrInspectionRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getHrInfosP0InspectionRecordsP1.key, {
      hrInfoId,
      inspectionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getHrInfosP0InspectionRecordsP1.key =
  "/hrInfos/{hrInfoId}/inspectionRecords/{inspectionRecordId}";

/**
 *
 * ???????????????
 */
export const getNewVersion = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: number;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getNewVersion.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getNewVersion.key = "/newVersion";

/**
 *
 * ??????????????????
 */
export const getPositionTypes = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: PositionTypes;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getPositionTypes.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getPositionTypes.key = "/positionTypes";

/**
 *
 * ??????????????????
 */
export const getRecommendations = (
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????ID
     *
     */
    body: string[];
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getRecommendations.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getRecommendations.key = "/recommendations";

/**
 *
 * ????????????????????????
 */
export const getUserInfos = (
  queryParams?: GetUserInfosQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
      /**
       *
       * ??????????????????
       *
       */
      userInformations: UserInformation[];
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getUserInfos.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfos.key = "/userInfos";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: UserInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0.key, { userInfoId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0.key = "/userInfos/{userInfoId}";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0AttentionRecords = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0AttentionRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      attentionRecords: AttentionRecord[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0AttentionRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0AttentionRecords.key = "/userInfos/{userInfoId}/attentionRecords";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0AttentionRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  attentionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0AttentionRecordsP1.key, {
      userInfoId,
      attentionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0AttentionRecordsP1.key =
  "/userInfos/{userInfoId}/attentionRecords/{attentionRecordId}";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0DeliveryRecords = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0DeliveryRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      deliveryRecords: DeliveryRecord[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0DeliveryRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0DeliveryRecords.key = "/userInfos/{userInfoId}/deliveryRecords";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0DeliveryRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  deliveryRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0DeliveryRecordsP1.key, {
      userInfoId,
      deliveryRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0DeliveryRecordsP1.key =
  "/userInfos/{userInfoId}/deliveryRecords/{deliveryRecordId}";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0EduExperiences = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0EduExperiencesQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      educationExperiences: EducationExperience[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0EduExperiences.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0EduExperiences.key = "/userInfos/{userInfoId}/eduExperiences";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0EduExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  eduExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0EduExperiencesP1.key, {
      userInfoId,
      eduExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0EduExperiencesP1.key =
  "/userInfos/{userInfoId}/eduExperiences/{eduExperienceId}";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0GarnerRecords = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0GarnerRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      garnerRecords: GarnerRecord[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0GarnerRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0GarnerRecords.key = "/userInfos/{userInfoId}/garnerRecords";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0GarnerRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  garnerRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0GarnerRecordsP1.key, { userInfoId, garnerRecordId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0GarnerRecordsP1.key =
  "/userInfos/{userInfoId}/garnerRecords/{garnerRecordId}";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0InspectionRecords = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0InspectionRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
      /**
       *
       * ??????????????????
       *
       */
      userInspectionRecords: UserInspectionRecord[];
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0InspectionRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0InspectionRecords.key =
  "/userInfos/{userInfoId}/inspectionRecords";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0InspectionRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  inspectionRecordId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: UserInspectionRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0InspectionRecordsP1.key, {
      userInfoId,
      inspectionRecordId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0InspectionRecordsP1.key =
  "/userInfos/{userInfoId}/inspectionRecords/{inspectionRecordId}";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0JobExpectations = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0JobExpectationsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      jobExpectations: JobExpectation[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0JobExpectations.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0JobExpectations.key = "/userInfos/{userInfoId}/jobExpectations";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0JobExpectationsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  jobExpectationId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0JobExpectationsP1.key, {
      userInfoId,
      jobExpectationId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0JobExpectationsP1.key =
  "/userInfos/{userInfoId}/jobExpectations/{jobExpectationId}";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0ProjectExperiences = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0ProjectExperiencesQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ??????????????????
       *
       */
      projectExperiences: ProjectExperience[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0ProjectExperiences.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0ProjectExperiences.key =
  "/userInfos/{userInfoId}/projectExperiences";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0ProjectExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  projectExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: ProjectExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0ProjectExperiencesP1.key, {
      userInfoId,
      projectExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0ProjectExperiencesP1.key =
  "/userInfos/{userInfoId}/projectExperiences/{projectExperienceId}";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0SawMeRecords = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0SawMeRecordsQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * HR??????????????????
       *
       */
      hrInspectionRecords: HrInspectionRecord[];
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0SawMeRecords.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0SawMeRecords.key = "/userInfos/{userInfoId}/sawMeRecords";

/**
 *
 * ????????????????????????
 */
export const getUserInfosP0WorkExperiences = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  queryParams?: GetUserInfosP0WorkExperiencesQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      /**
       *
       * ????????????
       *
       */
      totalCount: number;
      /**
       *
       * ??????????????????
       *
       */
      workExperiences: WorkExperience[];
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0WorkExperiences.key, { userInfoId }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0WorkExperiences.key = "/userInfos/{userInfoId}/workExperiences";

/**
 *
 * ??????????????????
 */
export const getUserInfosP0WorkExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  workExperienceId: string,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    template(getUserInfosP0WorkExperiencesP1.key, {
      userInfoId,
      workExperienceId,
    }),
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getUserInfosP0WorkExperiencesP1.key =
  "/userInfos/{userInfoId}/workExperiences/{workExperienceId}";

/**
 *
 * ???????????????
 */
export const getVerificationCode = (
  queryParams?: GetVerificationCodeQueryParams,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.getRequest(
    getVerificationCode.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
getVerificationCode.key = "/verificationCode";

/**
 *
 * ????????????
 */
export const postAccountInfos = (
  requestBody: {
    /**
     *
     * ????????????
     *
     * {1:??????,2:HR}
     */
    accountType: "1" | "2";
    /**
     *
     * ??????
     *
     */
    password: string;
    /**
     *
     * ?????????
     *
     */
    userName: string;
    /**
     *
     * ???????????????
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAccountInfos.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAccountInfos.key = "/accountInfos";

/**
 *
 * ????????????
 */
export const postAccountInfosLogin = (
  requestBody: {
    /**
     *
     * ??????
     *
     */
    password: string;
    /**
     *
     * ?????????
     *
     */
    userName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: {
      accountInformation: AccountInformation;
      /**
       *
       * TOKEN
       *
       */
      token: string;
    };
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.postRequest(
    postAccountInfosLogin.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAccountInfosLogin.key = "/accountInfos/login";

/**
 *
 * ??????????????????
 */
export const postAdminAccountauthorities = (
  requestBody: {
    /**
     *
     * ??????????????????
     *
     */
    authorityName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.postRequest(
    postAdminAccountauthorities.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAdminAccountauthorities.key = "/admin/accountauthorities";

/**
 *
 * ???????????????
 */
export const postAdminAccountgroups = (
  requestBody: {
    /**
     *
     * ???????????????
     *
     */
    groupName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.postRequest(
    postAdminAccountgroups.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAdminAccountgroups.key = "/admin/accountgroups";

/**
 *
 * ??????????????????
 */
export const postAdminAccounts = (
  requestBody: {
    /**
     *
     * ????????????
     *
     * {1:??????,2:HR}
     */
    accountType: "1" | "2";
    /**
     *
     * ????????????ID
     *
     */
    fullInformationId: string;
    /**
     *
     * ?????????
     *
     */
    userName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.postRequest(
    postAdminAccounts.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postAdminAccounts.key = "/admin/accounts";

/**
 *
 * ????????????
 */
export const postAvatars = (
  requestBody: {
    /**
     *
     * ??????
     * - Format: binary
     * @example
     *   file://C:\Users\19790\Pictures\Default.jpg
     */
    avatar: File;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAvatars.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postAvatars.key = "/avatars";

/**
 *
 * ??????????????????
 */
export const postCompanyInfos = (
  requestBody: {
    /**
     *
     * ????????????
     *
     */
    about: string;
    /**
     *
     * ????????????
     *
     */
    address: string;
    /**
     *
     * ????????????
     *
     */
    benefits: string[];
    /**
     *
     * ????????????
     *
     */
    cityName: string;
    /**
     *
     * ????????????
     *
     */
    companyName: string;
    /**
     *
     * ????????????
     *
     */
    comprehensionName: string;
    /**
     *
     * ????????????
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    establishmentTime: string;
    /**
     *
     * ????????????
     *
     * {1:?????????,2:?????????,3:A???,4:B???,5:C???,6:D????????????,7:????????????,8:???????????????}
     */
    financingStage: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    /**
     *
     * ????????????
     *
     */
    fullName: string;
    /**
     *
     * ???????????????
     *
     */
    legalRepresentative: string;
    /**
     *
     * ????????????
     *
     */
    location: {
      /**
       *
       * ??????
       *
       */
      latitude: number;
      /**
       *
       * ??????
       *
       */
      longitude: number;
    };
    /**
     *
     * LOGO??????
     *
     */
    logoUrl: string;
    /**
     *
     * ????????????
     *
     */
    organizationType: string;
    /**
     *
     * ????????????
     *
     */
    recruitmentPosition: number;
    /**
     *
     * ????????????
     *
     */
    registeredCapital: string;
    /**
     *
     * ????????????
     *
     * {1:??????15???,2:15-50???,3:50-150???,4:150-500???,5:500-2000???,6:2000??????}
     */
    scale: "0" | "1" | "2" | "3" | "4" | "5" | "6";
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postCompanyInfos.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyInfos.key = "/companyInfos";

/**
 *
 * ??????????????????
 */
export const postCompanyInfosP0PositionInfos = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  requestBody: {
    /**
     *
     * ????????????
     *
     * ??????K
     */
    ceilingSalary: number;
    /**
     *
     * ????????????ID
     *
     */
    companyInformationId: string;
    /**
     *
     * ????????????
     *
     */
    departmentName: string;
    /**
     *
     * ????????????
     *
     */
    description: string;
    /**
     *
     * ????????????
     *
     */
    directionTags: string[];
    /**
     *
     * ????????????
     *
     * {1:?????????,2:??????,3:??????,4:??????,5:??????}
     */
    education: "0" | "1" | "2" | "3" | "4" | "5";
    /**
     *
     * ????????????
     *
     */
    highlights: string[];
    /**
     *
     * HR??????ID
     *
     */
    hrInformationId: string;
    /**
     *
     * ????????????
     *
     */
    interviewInfo: {
      /**
       *
       * ????????????
       *
       * {1:???????????????,2:????????????,3:???????????????,4:??????????????????}
       */
      illustrate: "1" | "2" | "3" | "4";
      /**
       *
       * ????????????
       *
       * {1:????????????,2:????????????,3:????????????}
       */
      situation: "1" | "2" | "3";
      /**
       *
       * ????????????
       *
       * {1:???????????????,2:???????????????}
       */
      time: "1" | "2";
      /**
       *
       * ????????????
       *
       * {1:1-2??????,2:3-4??????,3:5-6??????,4:????????????}
       */
      wheel: "1" | "2" | "3" | "4";
    };
    /**
     *
     * ????????????
     *
     */
    overTime: string;
    /**
     *
     * ????????????
     *
     */
    positionName: string;
    /**
     *
     * ????????????
     *
     */
    positionType: string;
    /**
     *
     * ????????????
     *
     * ??????K
     */
    startingSalary: number;
    /**
     *
     * ??????????????????
     *
     * {1:????????????:,2:????????????,3:?????????}
     */
    weekendReleaseTime: "0" | "1" | "2" | "3";
    /**
     *
     * ????????????
     *
     */
    workAreaName: string;
    /**
     *
     * ????????????
     *
     */
    workCityName: string;
    /**
     *
     * ????????????
     *
     */
    workProvinceName: string;
    /**
     *
     * ????????????
     *
     */
    workTime: string;
    /**
     *
     * ????????????
     *
     * {1:??????,2:??????,3:??????}
     */
    workType: "0" | "1" | "2" | "3";
    /**
     *
     * ????????????
     *
     */
    workingPlace: {
      /**
       *
       * ??????
       *
       */
      latitude: number;
      /**
       *
       * ??????
       *
       */
      longitude: number;
    };
    /**
     *
     * ????????????
     *
     * {1:????????????,2:??????/??????,3:3????????????,4:3-5???,5:5-10???,6:10?????????}
     */
    workingYears: "0" | "1" | "2" | "3" | "4" | "5" | "6";
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postCompanyInfosP0PositionInfos.key, { companyInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postCompanyInfosP0PositionInfos.key =
  "/companyInfos/{companyInfoId}/positionInfos";

/**
 *
 * ????????????
 */
export const postFiles = (
  requestBody: {
    /**
     *
     * ??????
     * - Format: binary
     * @example
     *   file://C:\Users\19790\Downloads\??????????????????.md
     */
    file: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postFiles.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT1, configOverride)
  );
};

/** Key is end point string without base url */
postFiles.key = "/files";

/**
 *
 * ??????????????????
 */
export const postUserInfosP0AttentionRecords = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * ????????????ID
     *
     */
    companyInformationId: string;
    /**
     *
     * ????????????ID
     *
     */
    userInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0AttentionRecords.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0AttentionRecords.key =
  "/userInfos/{userInfoId}/attentionRecords";

/**
 *
 * ??????????????????
 */
export const postUserInfosP0DeliveryRecords = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * ????????????ID
     *
     */
    companyInformationId: string;
    /**
     *
     * ????????????ID
     *
     */
    positionInformationId: string;
    /**
     *
     * ????????????ID
     *
     */
    userInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0DeliveryRecords.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0DeliveryRecords.key = "/userInfos/{userInfoId}/deliveryRecords";

/**
 *
 * ??????????????????
 */
export const postUserInfosP0EduExperiences = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * ????????????
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    admissionTime: string;
    /**
     *
     * ????????????
     *
     * {1:??????,2:??????,3:??????,4:??????}
     */
    education: "0" | "1" | "2" | "3" | "4";
    /**
     *
     * ????????????
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    graduationTime: string;
    /**
     *
     * ????????????
     *
     */
    majorName: string;
    /**
     *
     * ????????????
     *
     */
    schoolName: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0EduExperiences.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0EduExperiences.key = "/userInfos/{userInfoId}/eduExperiences";

/**
 *
 * ??????????????????
 */
export const postUserInfosP0GarnerRecords = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * ????????????ID
     *
     */
    companyInformationId: string;
    /**
     *
     * ????????????ID
     *
     */
    positionInformationId: string;
    /**
     *
     * ????????????ID
     *
     */
    userInformationId: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0GarnerRecords.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0GarnerRecords.key = "/userInfos/{userInfoId}/garnerRecords";

/**
 *
 * ??????????????????
 */
export const postUserInfosP0JobExpectations = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * ????????????
     *
     * ??????K
     */
    ceilingSalary: number;
    /**
     *
     * ????????????
     *
     */
    cityName: string;
    /**
     *
     * ????????????
     *
     */
    directionTags: string[];
    /**
     *
     * ????????????
     *
     */
    positionName: string;
    /**
     *
     * ????????????
     *
     * {1:??????,2:??????,3:??????}
     */
    positionType: "0" | "1" | "2" | "3";
    /**
     *
     * ????????????
     *
     * ??????K
     */
    startingSalary: number;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0JobExpectations.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0JobExpectations.key = "/userInfos/{userInfoId}/jobExpectations";

/**
 *
 * ??????????????????
 */
export const postUserInfosP0ProjectExperiences = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * ????????????
     *
     */
    achievement: string;
    /**
     *
     * ????????????
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    endTime: string;
    /**
     *
     * ????????????
     *
     */
    projectDescription: string;
    /**
     *
     * ????????????
     *
     */
    projectLink: string;
    /**
     *
     * ????????????
     *
     */
    projectName: string;
    /**
     *
     * ????????????
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    startTime: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0ProjectExperiences.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0ProjectExperiences.key =
  "/userInfos/{userInfoId}/projectExperiences";

/**
 *
 * ??????????????????
 */
export const postUserInfosP0WorkExperiences = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  requestBody: {
    /**
     *
     * ????????????
     *
     */
    companyIndustry: string;
    /**
     *
     * ????????????
     *
     */
    corporateName: string;
    /**
     *
     * ????????????
     *
     */
    departmentName: string;
    /**
     *
     * ????????????
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    endTime: string;
    /**
     *
     * ????????????
     *
     */
    jobContent: string;
    /**
     *
     * ????????????
     *
     */
    positionName: string;
    /**
     *
     * ????????????
     *
     * {1:??????,2:??????,3:??????}
     */
    positionType: "0" | "1" | "2" | "3";
    /**
     *
     * ????????????
     *
     * - pattern: ^((((19|20)\d{2})-(0?[13-9]|1[012])-(0?[1-9]|[12]\d|30))|(((19|20)\d{2})-(0?[13578]|1[02])-31)|(((19|20)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))-0?2-29))$
     */
    startTime: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    template(postUserInfosP0WorkExperiences.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
postUserInfosP0WorkExperiences.key = "/userInfos/{userInfoId}/workExperiences";

/**
 *
 * ????????????
 */
export const putAccountInfosForget = (
  requestBody: {
    /**
     *
     * ??????
     *
     */
    password: string;
    /**
     *
     * ?????????
     *
     */
    userName: string;
    /**
     *
     * ?????????
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    putAccountInfosForget.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccountInfosForget.key = "/accountInfos/forget";

/**
 *
 * ????????????
 */
export const putAccountInfosP0 = (
  accountInfoId: string,
  requestBody: {
    /**
     *
     * ??????
     *
     */
    password: string;
    /**
     *
     * ?????????
     *
     */
    verificationCode: string;
  },
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAccountInfosP0.key, { accountInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAccountInfosP0.key = "/accountInfos/{accountInfoId}";

/**
 *
 * ????????????????????????
 */
export const putAdminAccountauthoritiesP0 = (
  /**
   *
   * ????????????ID
   */
  accountauthorityid: string,
  requestBody: AccountAuthority,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountAuthority;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAdminAccountauthoritiesP0.key, { accountauthorityid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAdminAccountauthoritiesP0.key =
  "/admin/accountauthorities/{accountauthorityid}";

/**
 *
 * ?????????????????????
 */
export const putAdminAccountgroupsP0 = (
  /**
   *
   * ?????????ID
   */
  accountgroupid: string,
  requestBody: AccountGroup,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountGroup;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAdminAccountgroupsP0.key, { accountgroupid }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAdminAccountgroupsP0.key = "/admin/accountgroups/{accountgroupid}";

/**
 *
 * ??????????????????
 */
export const putAdminAccountsP0 = (
  /**
   *
   * ??????ID
   */
  accountId: string,
  requestBody: AccountInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AccountInformation;
    message: string;
    status: number;
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putAdminAccountsP0.key, { accountId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putAdminAccountsP0.key = "/admin/accounts/{accountId}";

/**
 *
 * ??????????????????
 */
export const putCompanyInfosP0 = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  requestBody: CompanyInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: CompanyInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putCompanyInfosP0.key, { companyInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyInfosP0.key = "/companyInfos/{companyInfoId}";

/**
 *
 * ??????????????????
 */
export const putCompanyInfosP0PositionInfosP1 = (
  /**
   *
   * ????????????ID
   */
  companyInfoId: string,
  /**
   *
   * ????????????ID
   */
  positionInfoId: string,
  requestBody: PositionInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: PositionInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putCompanyInfosP0PositionInfosP1.key, {
      companyInfoId,
      positionInfoId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putCompanyInfosP0PositionInfosP1.key =
  "/companyInfos/{companyInfoId}/positionInfos/{positionInfoId}";

/**
 *
 * ??????????????????
 */
export const putHrInfosP0 = (
  /**
   *
   * HR??????ID
   */
  hrInfoId: string,
  requestBody: HrInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: HrInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putHrInfosP0.key, { hrInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putHrInfosP0.key = "/hrInfos/{hrInfoId}";

/**
 *
 * ??????????????????
 */
export const putUserInfosP0 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  requestBody: UserInformation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: UserInformation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0.key, { userInfoId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0.key = "/userInfos/{userInfoId}";

/**
 *
 * ??????????????????
 */
export const putUserInfosP0AttentionRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  attentionRecordId: string,
  requestBody: AttentionRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: AttentionRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0AttentionRecordsP1.key, {
      userInfoId,
      attentionRecordId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0AttentionRecordsP1.key =
  "/userInfos/{userInfoId}/attentionRecords/{attentionRecordId}";

/**
 *
 * ??????????????????
 */
export const putUserInfosP0DeliveryRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  deliveryRecordId: string,
  requestBody: DeliveryRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: DeliveryRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0DeliveryRecordsP1.key, {
      userInfoId,
      deliveryRecordId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0DeliveryRecordsP1.key =
  "/userInfos/{userInfoId}/deliveryRecords/{deliveryRecordId}";

/**
 *
 * ??????????????????
 */
export const putUserInfosP0EduExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  eduExperienceId: string,
  requestBody: EducationExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: EducationExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0EduExperiencesP1.key, {
      userInfoId,
      eduExperienceId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0EduExperiencesP1.key =
  "/userInfos/{userInfoId}/eduExperiences/{eduExperienceId}";

/**
 *
 * ??????????????????
 */
export const putUserInfosP0GarnerRecordsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  garnerRecordId: string,
  requestBody: GarnerRecord,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: GarnerRecord;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0GarnerRecordsP1.key, { userInfoId, garnerRecordId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0GarnerRecordsP1.key =
  "/userInfos/{userInfoId}/garnerRecords/{garnerRecordId}";

/**
 *
 * ??????????????????
 */
export const putUserInfosP0JobExpectationsP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  jobExpectationId: string,
  requestBody: JobExpectation,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: JobExpectation;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0JobExpectationsP1.key, {
      userInfoId,
      jobExpectationId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0JobExpectationsP1.key =
  "/userInfos/{userInfoId}/jobExpectations/{jobExpectationId}";

/**
 *
 * ??????????????????
 */
export const putUserInfosP0ProjectExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  projectExperienceId: string,
  requestBody: ProjectExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    /**
     *
     * ????????????
     *
     */
    body: ProjectExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0ProjectExperiencesP1.key, {
      userInfoId,
      projectExperienceId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0ProjectExperiencesP1.key =
  "/userInfos/{userInfoId}/projectExperiences/{projectExperienceId}";

/**
 *
 * ??????????????????
 */
export const putUserInfosP0WorkExperiencesP1 = (
  /**
   *
   * ????????????ID
   */
  userInfoId: string,
  /**
   *
   * ????????????ID
   */
  workExperienceId: string,
  requestBody: WorkExperience,
  configOverride?: AxiosRequestConfig
): Promise<
  SwaggerResponse<{
    body: WorkExperience;
    /**
     *
     * ????????????
     *
     */
    message: string;
    /**
     *
     * ????????????
     *
     */
    status: number;
    /**
     *
     * ????????????
     *
     */
    timestamp: string;
  }>
> => {
  return Http.putRequest(
    template(putUserInfosP0WorkExperiencesP1.key, {
      userInfoId,
      workExperienceId,
    }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride)
  );
};

/** Key is end point string without base url */
putUserInfosP0WorkExperiencesP1.key =
  "/userInfos/{userInfoId}/workExperiences/{workExperienceId}";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT1 = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
};
