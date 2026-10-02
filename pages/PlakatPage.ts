import { Page, Locator } from '@playwright/test';

/**
 * Hierarchical AI Generated Page Object Model for PlakateSelberBuchenUndGestalte
 * URL: https://www.plakat.ch/de?analog=true&digital=true
 * Total Locators: 100
 */
export class PlakateSelberBuchenUndGestalte {
  readonly page: Page;

  /** Side Panel */
  readonly sidePanel: {
    skipToContentLink: Locator;
  };

  /** Header */
  readonly header: {
    aLink: Locator;
  };

  /** Menu */
  readonly menu: {
    suchenBuchenLink: Locator;
    technischeSpezifikationenLink: Locator;
    produktionLink: Locator;
    visualiserLink: Locator;
    btnSignInLink: Locator;
    cartLink: Locator;
    editLangDropdownSelect: Locator;
  };

  /** Inputs */
  readonly inputs: {
    editAnalogInput: Locator;
    editDigitalInput: Locator;
    editAllInput: Locator;
    inLocationInput: Locator;
    editImportInput: Locator;
    searchInput: Locator;
    searchInput2: Locator;
    searchInput3: Locator;
    editPerimeterKmInput: Locator;
    editPriceFromInput: Locator;
    editPriceToInput: Locator;
    editFormatsB12Input: Locator;
    editFormatsB200Input: Locator;
    editFormatsB24Input: Locator;
    editFormatsB4Input: Locator;
    editFormatsDigInput: Locator;
    editSlotTypesNpInput: Locator;
    editSlotTypesLpInput: Locator;
    editSlotTypesPrInput: Locator;
    editSlotTypesPlInput: Locator;
    editSlotTypesDtbsInput: Locator;
    editProhibitionsAlcoholInput: Locator;
    editProhibitionsErotismInput: Locator;
    editProhibitionsPoliticsInput: Locator;
    editProhibitionsReligionInput: Locator;
    editProhibitionsTobaccoInput: Locator;
    editProhibitionsVehicleInput: Locator;
    editLanguagesDInput: Locator;
    editLanguagesFInput: Locator;
    editLanguagesIInput: Locator;
    editLocationTypesStInput: Locator;
    editLocationTypesScInput: Locator;
    editLocationTypesFlInput: Locator;
    editLocationTypesBwInput: Locator;
    editLocationTypesCpInput: Locator;
    editLocationTypesTashInput: Locator;
    editLocationTypesWeInput: Locator;
    editPostingDays0Input: Locator;
    editPostingDays1Input: Locator;
    editPostingDays2Input: Locator;
    editPostingDays3Input: Locator;
    editPostingDays4Input: Locator;
    editPostingDays5Input: Locator;
  };

  /** Links */
  readonly links: {
    editClearLocationSearchLink: Locator;
  };

  /** Selects */
  readonly selects: {
    span: Locator;
    span2: Locator;
    span3: Locator;
    editStartDate: Locator;
    editDuration: Locator;
    editAvailabilityStatus: Locator;
    editSellableShow: Locator;
    editFavoritesShow: Locator;
    editDemographicCategory: Locator;
    editSpotDuration: Locator;
    editScreenResolution: Locator;
    editAnimationRestrictions: Locator;
  };

  /** Buttons */
  readonly buttons: {
    openTheListBtn: Locator;
    openTheListBtn2: Locator;
    openTheListBtn3: Locator;
    openTheListBtn4: Locator;
    openTheListBtn5: Locator;
    openTheListBtn6: Locator;
    openTheListBtn7: Locator;
    openTheListBtn8: Locator;
    openTheListBtn9: Locator;
    btnResetFilter: Locator;
    detailsBtn: Locator;
    button: Locator;
    detailsBtn2: Locator;
    button2: Locator;
    detailsBtn3: Locator;
    button3: Locator;
    detailsBtn4: Locator;
    button4: Locator;
    detailsBtn5: Locator;
    button5: Locator;
    detailsBtn6: Locator;
    button6: Locator;
    detailsBtn7: Locator;
    button7: Locator;
    detailsBtn8: Locator;
    button8: Locator;
    detailsBtn9: Locator;
    button9: Locator;
    detailsBtn10: Locator;
    button10: Locator;
    detailsBtn11: Locator;
    button11: Locator;
    detailsBtn12: Locator;
    button12: Locator;
    detailsBtn13: Locator;
  };

  constructor(page: Page) {
    this.page = page;

    this.sidePanel = {
      skipToContentLink: page.getByRole('link', { name: 'Skip to content' })
    };

    this.header = {
      aLink: page.locator('[href="/de"]')
    };

    this.menu = {
      suchenBuchenLink: page.locator('#block-clearchannel-main-menu').getByRole('link', { name: 'Suchen & Buchen' }),
      technischeSpezifikationenLink: page.locator('#block-clearchannel-main-menu').getByRole('link', { name: 'Technische Spezifikationen' }),
      produktionLink: page.locator('#block-clearchannel-main-menu').getByRole('link', { name: 'Produktion' }),
      visualiserLink: page.locator('#block-clearchannel-main-menu').getByRole('link', { name: 'Visualiser' }),
      btnSignInLink: page.locator('#btnSignIn'),
      cartLink: page.getByRole('link', { name: '0' }),
      editLangDropdownSelect: page.locator('#edit-lang-dropdown-select')
    };

    this.inputs = {
      editAnalogInput: page.locator('#edit-analog'),
      editDigitalInput: page.locator('#edit-digital'),
      editAllInput: page.locator('#edit-all'),
      inLocationInput: page.locator('#inLocation'),
      editImportInput: page.locator('#edit-import'),
      searchInput: page.locator('div.js-form-item.form-item.js-form-type-select.form-type-select.js-form-item-canton.form-item-canton > span.select2.select2-container.select2-container--default').locator('[aria-label="Search"]'),
      searchInput2: page.locator('div.js-form-item.form-item.js-form-type-select.form-type-select.js-form-item-municipality.form-item-municipality > span.select2.select2-container.select2-container--default').locator('[aria-label="Search"]'),
      searchInput3: page.locator('div.js-form-item.form-item.js-form-type-select.form-type-select.js-form-item-postcode.form-item-postcode.form-no-label > span.select2.select2-container.select2-container--default').locator('[aria-label="Search"]'),
      editPerimeterKmInput: page.locator('#edit-perimeter-km'),
      editPriceFromInput: page.locator('#edit-price-from'),
      editPriceToInput: page.locator('#edit-price-to'),
      editFormatsB12Input: page.locator('#edit-formats-b12'),
      editFormatsB200Input: page.getByRole('checkbox', { name: 'F200' }),
      editFormatsB24Input: page.locator('#edit-formats-b24'),
      editFormatsB4Input: page.locator('#edit-formats-b4'),
      editFormatsDigInput: page.locator('#edit-formats-dig'),
      editSlotTypesNpInput: page.locator('#edit-slot-types-np'),
      editSlotTypesLpInput: page.locator('#edit-slot-types-lp'),
      editSlotTypesPrInput: page.locator('#edit-slot-types-pr'),
      editSlotTypesPlInput: page.locator('#edit-slot-types-pl'),
      editSlotTypesDtbsInput: page.locator('#edit-slot-types-dtbs'),
      editProhibitionsAlcoholInput: page.locator('#edit-prohibitions-alcohol'),
      editProhibitionsErotismInput: page.locator('#edit-prohibitions-erotism'),
      editProhibitionsPoliticsInput: page.locator('#edit-prohibitions-politics'),
      editProhibitionsReligionInput: page.locator('#edit-prohibitions-religion'),
      editProhibitionsTobaccoInput: page.locator('#edit-prohibitions-tobacco'),
      editProhibitionsVehicleInput: page.locator('#edit-prohibitions-vehicle'),
      editLanguagesDInput: page.locator('#edit-languages-d'),
      editLanguagesFInput: page.locator('#edit-languages-f'),
      editLanguagesIInput: page.locator('#edit-languages-i'),
      editLocationTypesStInput: page.locator('#edit-location-types-st'),
      editLocationTypesScInput: page.locator('#edit-location-types-sc'),
      editLocationTypesFlInput: page.locator('#edit-location-types-fl'),
      editLocationTypesBwInput: page.locator('#edit-location-types-bw'),
      editLocationTypesCpInput: page.locator('#edit-location-types-cp'),
      editLocationTypesTashInput: page.locator('#edit-location-types-tash'),
      editLocationTypesWeInput: page.locator('#edit-location-types-we'),
      editPostingDays0Input: page.locator('#edit-posting-days-0'),
      editPostingDays1Input: page.locator('#edit-posting-days-1'),
      editPostingDays2Input: page.locator('#edit-posting-days-2'),
      editPostingDays3Input: page.locator('#edit-posting-days-3'),
      editPostingDays4Input: page.locator('#edit-posting-days-4'),
      editPostingDays5Input: page.locator('#edit-posting-days-5')
    };

    this.links = {
      editClearLocationSearchLink: page.locator('#edit-clear-location-search')
    };

    this.selects = {
      span: page.locator('div.js-form-item.form-item.js-form-type-select.form-type-select.js-form-item-canton.form-item-canton > span.select2.select2-container.select2-container--default > span.selection > span.select2-selection.select2-selection--multiple'),
      span2: page.locator('div.js-form-item.form-item.js-form-type-select.form-type-select.js-form-item-municipality.form-item-municipality > span.select2.select2-container.select2-container--default > span.selection > span.select2-selection.select2-selection--multiple'),
      span3: page.locator('div.js-form-item.form-item.js-form-type-select.form-type-select.js-form-item-postcode.form-item-postcode.form-no-label > span.select2.select2-container.select2-container--default > span.selection > span.select2-selection.select2-selection--multiple'),
      editStartDate: page.locator('#edit-start-date'),
      editDuration: page.locator('#edit-duration'),
      editAvailabilityStatus: page.locator('#edit-availability-status'),
      editSellableShow: page.locator('#edit-sellable-show'),
      editFavoritesShow: page.locator('#edit-favorites-show'),
      editDemographicCategory: page.locator('#edit-demographic-category'),
      editSpotDuration: page.locator('#edit-spot-duration'),
      editScreenResolution: page.locator('#edit-screen-resolution'),
      editAnimationRestrictions: page.locator('#edit-animation-restrictions')
    };

    this.buttons = {
      openTheListBtn: page.locator('[aria-controls="edit-start-date_optionlist"]'),
      openTheListBtn2: page.locator('[aria-controls="edit-duration_optionlist"]'),
      openTheListBtn3: page.locator('[aria-controls="edit-availability-status_optionlist"]'),
      openTheListBtn4: page.locator('[aria-controls="edit-sellable-show_optionlist"]'),
      openTheListBtn5: page.locator('[aria-controls="edit-favorites-show_optionlist"]'),
      openTheListBtn6: page.locator('[aria-controls="edit-demographic-category_optionlist"]'),
      openTheListBtn7: page.locator('[aria-controls="edit-spot-duration_optionlist"]'),
      openTheListBtn8: page.locator('[aria-controls="edit-screen-resolution_optionlist"]'),
      openTheListBtn9: page.locator('[aria-controls="edit-animation-restrictions_optionlist"]'),
      btnResetFilter: page.locator('#btnResetFilter'),
      detailsBtn: page.locator('tr').filter({ hasText: 'StellenNr: 48157Zürcherstr. 51Details' }).getByRole('button', { name: 'Details' }),
      button: page.locator('tr').filter({ hasText: 'StellenNr: 48157Zürcherstr. 51Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn2: page.locator('tr').filter({ hasText: 'StellenNr: 48158Zürcherstr. 51Details' }).getByRole('button', { name: 'Details' }),
      button2: page.locator('tr').filter({ hasText: 'StellenNr: 48158Zürcherstr. 51Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn3: page.locator('tr').filter({ hasText: 'StellenNr: 48152City Parking ElisabethenDetails' }).getByRole('button', { name: 'Details' }),
      button3: page.locator('tr').filter({ hasText: 'StellenNr: 48152City Parking ElisabethenDetails' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn4: page.locator('tr').filter({ hasText: 'StellenNr: 48153Seestr. 183Details' }).getByRole('button', { name: 'Details' }),
      button4: page.locator('tr').filter({ hasText: 'StellenNr: 48153Seestr. 183Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn5: page.locator('tr').filter({ hasText: 'StellenNr: 48221Av. de Morges 68Details' }).getByRole('button', { name: 'Details' }),
      button5: page.locator('tr').filter({ hasText: 'StellenNr: 48221Av. de Morges 68Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn6: page.locator('tr').filter({ hasText: 'StellenNr: 48138Vicolo Posta VecchiaDetails' }).getByRole('button', { name: 'Details' }),
      button6: page.locator('tr').filter({ hasText: 'StellenNr: 48138Vicolo Posta VecchiaDetails' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn7: page.locator('tr').filter({ hasText: 'StellenNr: 48134Via San Gottardo 83Details' }).getByRole('button', { name: 'Details' }),
      button7: page.locator('tr').filter({ hasText: 'StellenNr: 48134Via San Gottardo 83Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn8: page.locator('tr').filter({ hasText: "StellenNr: 48132Rte des Gouttes-d'Or 14Details" }).getByRole('button', { name: 'Details' }),
      button8: page.locator('tr').filter({ hasText: "StellenNr: 48132Rte des Gouttes-d'Or 14Details" }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn9: page.locator('tr').filter({ hasText: 'StellenNr: 48130Av. de Morges 29Details' }).getByRole('button', { name: 'Details' }),
      button9: page.locator('tr').filter({ hasText: 'StellenNr: 48130Av. de Morges 29Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn10: page.locator('tr').filter({ hasText: 'StellenNr: 48114Wilerweg 101Details' }).getByRole('button', { name: 'Details' }),
      button10: page.locator('tr').filter({ hasText: 'StellenNr: 48114Wilerweg 101Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn11: page.locator('tr').filter({ hasText: 'StellenNr: 48118Flughofstr. 52Details' }).getByRole('button', { name: 'Details' }),
      button11: page.locator('tr').filter({ hasText: 'StellenNr: 48118Flughofstr. 52Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn12: page.locator('tr').filter({ hasText: 'StellenNr: 48119Flughofstr. 52Details' }).getByRole('button', { name: 'Details' }),
      button12: page.locator('tr').filter({ hasText: 'StellenNr: 48119Flughofstr. 52Details' }).getByRole('button', { name: 'Zur Kampagne hinzufügen' }),
      detailsBtn13: page.locator('tr').filter({ hasText: 'StellenNr: 48120Hofwisenstr. 50Details' }).getByRole('button', { name: 'Details' })
    };

  }

  /** Navigates to the target page */
  async goto(): Promise<void> {
    await this.page.goto('https://www.plakat.ch/de?analog=true&digital=true');
  }
}