import {
  BIReports,
  CreateNewStandartReportTabs
} from '../../page_objects'
import * as url from 'url'
import { fragments, pages } from '../../page_objects/po'
import { browser } from 'protractor'
import { reportStep, openLinkInNewTab } from '../../helpers'
import { expect } from 'chai'
import { accounts, users } from '../../test_data'

describe('Report', () => {
  const {
    loginPage,
    accountLevel: {
      accountProjectsPage,
      projects: {
        accountProjectDetailsAddEditPage
      },
      reports: {
        accountReportsPage,
        bi: {
          standartReport: {
            accountBusinessIntelligenceNewStandartReportPage
          }
        }
      },
    }
  } = pages
  const { accountTabMenu } = fragments

  beforeEach(async () => loginPage.login(users.auser1, accounts.shorensteinRealtyServicesLP))

  // Rainforest ID none
  // EBA-730

  it(`Saving the BI Report . EBA-730 ${browser.___browserName}`, async () => {
    await accountTabMenu.to.reports()
    await accountReportsPage.sendKeys({ addBIReportButton: BIReports.standardReports })

    await accountBusinessIntelligenceNewStandartReportPage.clickOn({
      switchCreateNewReportTabs: CreateNewStandartReportTabs.categories
    })
    await accountBusinessIntelligenceNewStandartReportPage.clickOn({
      categories: { mainCategory: 'Schedule', subcategories: 'Master Activity' }
    })
    await accountBusinessIntelligenceNewStandartReportPage.clickOn({
      switchCreateNewReportTabs: CreateNewStandartReportTabs.filters
    })
    await accountBusinessIntelligenceNewStandartReportPage.clickOn({
      filters: {
        subFilters: ['Building Permit Start', 'Project ID']
      }
    })
    const {
      filtersFiltersSplitter
    } = await accountBusinessIntelligenceNewStandartReportPage.getData({ filtersFiltersSplitter: null }) as any

    await reportStep(`you will see the drop down with a default value, Default value is "Equal to"`, async () => {
      expect(filtersFiltersSplitter.find((item) => item.text === 'Equal To').isSelected).to.eq(true,
        'Item with "Equal To" shoulb be selected')
    })
    // hardcoded part
    await openLinkInNewTab(url.resolve(browser.baseUrl, '/da2/Projects/index.aspx'))
    await accountProjectsPage.clickOn({
      projectsTable: {
        link: {
          tableHeader: 'ProjectName', searchByValue: '!!Project A', searchInColumn: {
            header: 'EmptyTitle0', linkText: 'Edit'
          }
        }
      }
    })
    // on hold
    // await accountProjectDetailsAddEditPage.getData({})
  })
})

// EBA_730_Saving_the_BI_Report